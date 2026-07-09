export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/css/tailwind.css"], // optional but recommended

    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],

    tailwindcss: {
        exposeConfig: true,
    },
    runtimeConfig: {
        public: {
            apiBase: "http://localhost:8000",
        },
    },
});
