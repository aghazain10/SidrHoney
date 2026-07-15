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
            title: "Pure Sdr Honey from Gilgit Baltistan",
            link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
        },
    },
    runtimeConfig: {
        public: {
            apiBase:
                process.env.NUXT_PUBLIC_API_BASE || "http://localhost:8000",
        },
    },
});
