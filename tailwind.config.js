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
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                serif4: ["var(--font-source-serif-4)"],
                roboto: ["var(--font-roboto)"],
                raleway: ["var(--font-raleway)"],
                montserrat: ["var(--font-montserrat)"],
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
            container: {
                newContainer: "",
            },
        },
    },
    plugins: [],
};
