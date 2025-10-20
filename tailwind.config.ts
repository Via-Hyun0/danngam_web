import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef5f1",
          100: "#fde9df",
          200: "#fbd0be",
          300: "#f7ad92",
          400: "#f28165",
          500: "#EC6737",
          600: "#d94316",
          700: "#b53412",
          800: "#932d15",
          900: "#782915",
        },
        secondary: {
          50: "#f7f9f0",
          100: "#eef3dc",
          200: "#dfe8bd",
          300: "#c9d794",
          400: "#b5c76f",
          500: "#95A543",
          600: "#7a8935",
          700: "#5f6b2b",
          800: "#4d5627",
          900: "#414824",
        },
        background: "#FFF8E9",
        text: {
          DEFAULT: "#1a1a1a",
          light: "#4a5568",
          lighter: "#718096",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-cal)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": [
          "4.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-xl": [
          "3.75rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-lg": [
          "3rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        "display-md": [
          "2.25rem",
          { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "display-sm": [
          "1.875rem",
          { lineHeight: "1.3", letterSpacing: "0", fontWeight: "600" },
        ],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)",
        medium: "0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.08)",
        large: "0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)",
        primary: "0 8px 24px rgba(236, 103, 55, 0.2)",
        secondary: "0 8px 24px rgba(149, 165, 67, 0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #EC6737 0%, #d94316 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #95A543 0%, #7a8935 100%)",
        "gradient-soft": "linear-gradient(135deg, #FFF8E9 0%, #fef5f1 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
