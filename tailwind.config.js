import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                gilroy: ["Gilroy", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            animation: {
                "spin-slow": "spin 4s linear infinite", // Slow spinning animation
                "bounce-slow": "bounce 3s infinite", // Slow bouncing animation
                scaleUp: "scaleUp 1s ease-out forwards", // Scaling animation
                slideInLeft: "slideInLeft 1s ease-out forwards", // Slide in from left
                slideInRight: "slideInRight 1s ease-out forwards", // Slide in from right
            },
            keyframes: {
                scaleUp: {
                    "0%": { transform: "scale(0.8)" },
                    "100%": { transform: "scale(1)" },
                },
                slideInLeft: {
                    "0%": { transform: "translateX(-100%)", opacity: 0 },
                    "100%": { transform: "translateX(0)", opacity: 1 },
                },
                slideInRight: {
                    "0%": { transform: "translateX(100%)", opacity: 0 },
                    "100%": { transform: "translateX(0)", opacity: 1 },
                },
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: ["light", "dark"],
    },
};
