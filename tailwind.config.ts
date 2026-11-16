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
                ink: "#0B0908",
                onyx: "#131009",
                coal: "#1A1611",
                card: "#201B14",
                cardhover: "#262117",
                line: "rgba(233, 190, 90, 0.14)",
                gold: {
                    100: "#FBF3D9",
                    200: "#F6E3AC",
                    300: "#F6D87A",
                    400: "#E9BE5A",
                    500: "#D4A017",
                    600: "#B4770E",
                    700: "#8A5A00",
                    800: "#5C3D00",
                },
                cream: "#F5EDE0",
                muted: "#A79A85",
            },
            fontFamily: {
                sans: ["Manrope", "system-ui", "sans-serif"],
                display: ["'Playfair Display'", "Georgia", "serif"],
                aspire: ["LT Aspire Neue Black", "sans-serif"],
            },
            boxShadow: {
                "gold-glow": "0 0 60px rgba(212, 160, 23, 0.35)",
                "gold-sm": "0 8px 30px rgba(212, 160, 23, 0.25)",
                "card-dark": "0 20px 50px rgba(0, 0, 0, 0.5)",
            },
        },
    },
};
