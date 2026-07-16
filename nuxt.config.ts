export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/css/tailwind.css"],
    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/image"],
    tailwindcss: {
        exposeConfig: true,
    },
    image: {
        quality: 80,
        format: ["webp"],
    },

    app: {
        head: {
            // ---------- GLOBAL TITLE & META ----------
            title: "Pure Sdr Honey – Raw & Unprocessed from Gilgit Baltistan",
            meta: [
                {
                    name: "google-site-verification",
                    content: "nm-8LJ7TkMfmcJbMCmo8-9hOqzsWgizgEYa6x1Gg8XQ",
                },

                // Charset & viewport
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },

                // Primary meta description (SEO)
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Buy 100% pure Sdr honey from Gilgit Baltistan. Raw, unprocessed, and naturally harvested. Rich in antioxidants – order now for health benefits.",
                },

                // Robots: allow indexing and following links
                { name: "robots", content: "index, follow" },

                // ---------- OPEN GRAPH (for social sharing) ----------
                {
                    property: "og:title",
                    content:
                        "Pure Sdr Honey – Raw & Unprocessed from Gilgit Baltistan",
                },
                {
                    property: "og:description",
                    content:
                        "Buy 100% pure Sdr honey from Gilgit Baltistan. Raw, unprocessed, and naturally harvested. Rich in antioxidants – order now.",
                },
                { property: "og:type", content: "website" },
                { property: "og:url", content: "https://sdrhoney.com" },

                {
                    property: "og:image",
                    content: "https://sdrhoney.com/honey-product-1.jpeg",
                },
                { property: "og:image:width", content: "1200" },
                { property: "og:image:height", content: "630" },

                // ---------- TWITTER CARD ----------
                { name: "twitter:card", content: "summary_large_image" },
                {
                    name: "twitter:title",
                    content: "Pure Sdr Honey – Raw & Unprocessed",
                },
                {
                    name: "twitter:description",
                    content:
                        "Buy 100% pure Sdr honey from Gilgit Baltistan. Raw, unprocessed, and naturally harvested. Rich in antioxidants – order now.",
                },
                {
                    name: "twitter:image",
                    content: "https://sdrhoney.com/honey-product-1.jpeg", // same as og:image
                },
            ],

            // ---------- LINKS ----------
            link: [
                // Favicon
                { rel: "icon", type: "image/png", href: "/favicon.png" },

                // Canonical URL (self‑referencing) – prevents duplicate content issues
                { rel: "canonical", href: "https://sdrhoney.com" },
            ],
        },
    },

    runtimeConfig: {
        public: {
            apiBase:
                process.env.NUXT_PUBLIC_API_BASE || "http://localhost:8000",
        },
    },
});
