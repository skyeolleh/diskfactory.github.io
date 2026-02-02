import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                brand: {
                    primary: "#00FF41", // Matrix Green/Game vibe
                    secondary: "#FFFFFF", // Spine/Disk white
                    accent: "#FF00FF", // Floppy Purple/Pink vibe
                }
            },
            fontFamily: {
                game: ['"Press Start 2P"', 'system-ui'],
                sans: ["var(--font-geist-sans)", "system-ui"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
} satisfies Config;
