/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            maxWidth: {
                1440: "1440px",
            },
            colors: {
                darkModeBG: "hsl(207, 26%, 17%)",
                darkModeE: "hsl(209, 23%, 22%)",
                darkModeT: "hsl(0, 0%, 100%)",
                lightModeBG: "hsl(0, 0%, 98%)",
                lightModeT: "hsl(200, 15%, 8%)",
                lightModeI: "hsl(0, 0%, 52%)",
                lightModeE: "hsl(0, 0%, 100%)",
            },
        },
        screens: {
            ms: "320px",
            pmd: "375px",
            ml: "425px",
        },
        darkMode: "class",
    },
    plugins: [],
};
