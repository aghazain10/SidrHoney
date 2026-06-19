export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/css/tailwind.css"], // optional but recommended

    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],

    tailwindcss: {
        exposeConfig: true,
    },
});
