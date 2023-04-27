/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif4: ["var(--font-source-serif-4)"],
            },
            boxShadow: {
                headerShadow: "5px 3px 30px rgba(19, 70, 131, 0.1)",
                homeOutstanding: "20px 20px 60px rgba(19, 70, 131, 0.1)",
            },
            maxWidth: {
                ["my-container"]: "1366px",
            },
            colors: {
                primary: "#124874",
                newRed: "#CF373D",
            },
            backgroundColor: {
                primary: "#124874",
                newRed: "#CF373D",
            },
        },
    },
    plugins: [],
};
