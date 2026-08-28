import { defineEventHandler, setHeader } from "h3";

const SITE = "https://sdrhoney.com";

function escapeXml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

export default defineEventHandler(async (event) => {
    setHeader(event, "Content-Type", "application/xml; charset=utf-8");
    setHeader(event, "Cache-Control", "public, max-age=3600");

    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase || "https://api.sdrhoney.com";

    const staticPages = [
        { loc: SITE, priority: "1.0", changefreq: "weekly" },
    ];

    let blogUrls: string[] = [];
    try {
        const res: any = await $fetch(`${apiBase}/api/blogs`, {
            query: { per_page: 100 },
        });
        const blogs = res?.data?.data ?? [];
        blogUrls = blogs.map(
            (b: any) =>
                `    <url>\n` +
                `      <loc>${SITE}/blog/${escapeXml(b.slug)}</loc>\n` +
                `      <lastmod>${escapeXml(
                    (b.updated_at || b.published_at || "").toString().slice(0, 10),
                )}</lastmod>\n` +
                `      <changefreq>monthly</changefreq>\n` +
                `      <priority>0.8</priority>\n` +
                `    </url>`,
        );
    } catch (e) {
        // If the API is unreachable, still return the static pages.
        blogUrls = [];
    }

    const staticXml = staticPages
        .map(
            (p) =>
                `    <url>\n` +
                `      <loc>${p.loc}</loc>\n` +
                `      <changefreq>${p.changefreq}</changefreq>\n` +
                `      <priority>${p.priority}</priority>\n` +
                `    </url>`,
        )
        .join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${blogUrls.join("\n")}
</urlset>`;
});
