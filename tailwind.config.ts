export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
    ],
    plugins: [require("@tailwindcss/typography")],
    theme: {
        extend: {
            colors: {
                honey: {
                    50: "#fffbeb",
                    500: "#f59e0b",
                    600: "#d97706",
                    700: "#b45309",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                display: ["Playfair Display", "serif"],
                aspire: ["LT Aspire Neue Black", "sans-serif"],
            },
        },
    },
};
