/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Dark theme support
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      /* ===============================
         COLORS (Dark SaaS Theme)
      =============================== */
      colors: {
        background: "#0B0F0E",
        surface: "#111827",
        card: "rgba(255,255,255,0.04)",
        border: "rgba(255,255,255,0.08)",

        primary: "#4ADE80",   // green
        primaryHover: "#22C55E",

        textPrimary: "#E5E7EB",
        textSecondary: "#9CA3AF",
        textMuted: "#6B7280",
      },

      /* ===============================
         FONTS
      =============================== */
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },

      /* ===============================
         FONT SIZES (Responsive SaaS Scale)
      =============================== */
      fontSize: {
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
        '4xl': ['2.25rem', '2.75rem'],
        '5xl': ['3rem', '3.5rem'],
      },

      /* ===============================
         BORDER RADIUS (Modern Cards)
      =============================== */
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },

      /* ===============================
         BACKDROP BLUR (Glassmorphism)
      =============================== */
      backdropBlur: {
        xs: '2px',
        sm: '6px',
        md: '12px',
      },

      /* ===============================
         BOX SHADOWS
      =============================== */
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.25)',
        glow: '0 0 20px rgba(74,222,128,0.4)',
      },
    },
  },
  plugins: [],
}
