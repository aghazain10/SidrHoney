export default defineNuxtConfig({
    devtools: { enabled: false },
    css: ["~/assets/css/tailwind.css"],
    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/image"],
    tailwindcss: {
        exposeConfig: true,
    },
    image: {
        quality: 75,
        format: ["webp"],
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
        },
    },

    experimental: {
        payloadExtraction: false,
    },

    app: {
        head: {
            htmlAttrs: { lang: "en" },
                title: "Buy Pure Sidr (Beri) Honey Online in Pakistan | Sdr Honey — Wild Forests of Karak",
            meta: [
                {
                    name: "google-site-verification",
                    content: "nm-8LJ7TkMfmcJbMCmo8-9hOqzsWgizgEYa6x1Gg8XQ",
                },
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Buy 100% pure raw Sidr (Beri) Honey from the wild forests of Karak, Pakistan. Never heated, lab-tested, ISO & Halal certified. Order via WhatsApp today.",
                },
                { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
                { name: "theme-color", content: "#f59e0b" },
                { property: "og:title", content: "Sidr Honey Pakistan – 100% Raw & Pure | Buy Online" },
                {
                    property: "og:description",
                    content:
                        "Buy 100% pure raw Sidr (Beri) Honey from the wild forests of Karak, Pakistan. Never heated, lab-tested, ISO & Halal certified. Order via WhatsApp today.",
                },
                { property: "og:type", content: "website" },
                { property: "og:url", content: "https://sdrhoney.com" },
                { property: "og:site_name", content: "Sidr Honey by Organic Aprico" },
                { property: "og:locale", content: "en_PK" },
                {
                    property: "og:image",
                    content: "https://sdrhoney.com/honey-product-1.jpeg",
                },
                { property: "og:image:width", content: "1200" },
                { property: "og:image:height", content: "630" },
                { property: "og:image:alt", content: "Pure Sidr Honey from Karak, Pakistan" },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: "Sidr Honey Pakistan – 100% Raw & Pure | Buy Online" },
                {
                    name: "twitter:description",
                    content:
                        "Buy 100% pure raw Sidr (Beri) Honey from the wild forests of Karak, Pakistan. Never heated, lab-tested, ISO & Halal certified.",
                },
                { name: "twitter:image", content: "https://sdrhoney.com/honey-product-1.jpeg" },
                { name: "twitter:image:alt", content: "Pure Sidr Honey from Karak, Pakistan" },
            ],
            link: [
                { rel: "icon", type: "image/png", href: "/favicon.png" },
                { rel: "canonical", href: "https://sdrhoney.com" },
                {
                    rel: "preload",
                    href: "/fonts/LTAspirerNeue-Heavy.woff2",
                    as: "font",
                    type: "font/woff2",
                    crossorigin: "",
                },
                {
                    rel: "dns-prefetch",
                    href: "https://sdrhoney.com",
                },
            ],
        },
    },

    routeRules: {
        "/_nuxt/**": {
            headers: { "Cache-Control": "public, max-age=31536000, immutable" },
        },
        "/fonts/**": {
            headers: { "Cache-Control": "public, max-age=31536000, immutable" },
        },
        "/**": {
            headers: { "Cache-Control": "public, max-age=86400, s-maxage=86400" },
        },
    },

    nitro: {
        compressPublicAssets: true,
    },

    runtimeConfig: {
        public: {
            apiBase:
                process.env.NUXT_PUBLIC_API_BASE || "http://localhost:8000",
        },
    },
});
