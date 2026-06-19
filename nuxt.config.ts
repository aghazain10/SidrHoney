export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/css/tailwind.css"], // optional but recommended

    modules: ["@nuxtjs/tailwindcss"],

    tailwindcss: {
        exposeConfig: true,
    },
});
