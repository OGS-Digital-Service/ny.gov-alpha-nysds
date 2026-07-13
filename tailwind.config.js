/** @type {import('tailwindcss').Config} */
 
// Tailwind CSS v3 config generated from the NYS Design System (NYSDS) tokens
// Source: https://designsystem.ny.gov/tokens/ and https://designsystem.ny.gov/tokens/primitives/
//
// NOTE: NYSDS theme tokens (--nys-color-theme, etc.) change value depending on the active
// agency theme (Admin, Business, Environment, Health, Local, Safety, Transportation).
// If you're loading the NYSDS CSS custom properties in your project, it's often better to
// reference `var(--nys-color-theme)` directly rather than hard-coded hex, so theme switching
// keeps working. Both approaches are included below — pick whichever fits your setup:
//   1) hardCodedValues (default hex values below, "Default/NYS" theme)
//   2) cssVariables (commented alternative using var(--nys-...) — works if NYSDS CSS is loaded)
 
module.exports = {
  content: [
    './_site/*.html',
    './_site/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        // ---- Theme colors (Default/NYS agency theme) ----
        theme: {
          DEFAULT: "#154973",
          strong: "#0e324f",
          stronger: "#081b2b",
          mid: "#457aa5",
          weak: "#cddde9",
          weaker: "#eff6fb",
          faint: "#f7fafd",
        },
 
        // ---- Intent colors ----
        accent: "#face00",
        info: {
          DEFAULT: "#004dd1",
          weak: "#e5effa",
        },
        success: {
          DEFAULT: "#1e752e",
          weak: "#e8f1ea",
        },
        warning: {
          DEFAULT: "#face00",
          weak: "#fefae5",
        },
        danger: {
          DEFAULT: "#b52c2c",
          weak: "#f7eaea",
        },
        emergency: {
          DEFAULT: "#721c1c",
          weak: "#d89191",
        },
 
        // ---- Semantic colors ----
        base: {
          DEFAULT: "#d0d0ce",
          weak: "#ededed",
        },
        ink: {
          DEFAULT: "#1b1b1b",
          reverse: "#ffffff",
        },
        text: {
          DEFAULT: "#1b1b1b",
          weak: "#4a4d4f",
          weaker: "#797c7f",
          weakest: "#bec0c1",
          disabled: "#bec0c1",
          reverse: "#ffffff",
          "reverse-weak": "#d0d0ce",
          "reverse-weaker": "#bec0c1",
          "reverse-disabled": "#62666a",
        },
        link: {
          DEFAULT: "#004dd1",
          strong: "#003ba1",
          strongest: "#002971",
          neutral: "#1b1b1b",
          reverse: "#a7a9ab",
          "reverse-strong": "#ededed",
          "reverse-strongest": "#ffffff",
          "reverse-neutral": "#ffffff",
        },
        focus: {
          DEFAULT: "#004dd1",
          reverse: "#7AA5E7",
        },
        surface: {
          DEFAULT: "#ffffff",
          raised: "#f6f6f6",
          reverse: "#1b1b1b",
        },
 
        // ---- Neutral gray scale (primitives) ----
        neutral: {
          900: "#1b1b1b",
          800: "#323435",
          700: "#4a4d4f",
          600: "#62666a",
          500: "#797c7f",
          400: "#909395",
          300: "#a7a9ab",
          200: "#bec0c1",
          100: "#d0d0ce",
          50: "#ededed",
          10: "#f6f6f6",
        },
      },
 
      fontFamily: {
        sans: [
          "Proxima Nova",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
        agency: ["D Sari", "Arial", "sans-serif"],
        alt: ["Oswald", "Arial", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
 
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "18px" }],  // 10px
        xs: ["0.75rem", { lineHeight: "21px" }],       // 12px
        sm: ["0.875rem", { lineHeight: "22px" }],      // 14px
        md: ["1rem", { lineHeight: "25px" }],          // 16px (base body)
        lg: ["1.125rem", { lineHeight: "28px" }],      // 18px
        xl: ["1.25rem", { lineHeight: "31px" }],       // 20px
        "2xl": ["1.375rem", { lineHeight: "39px" }],   // 22px
        "3xl": ["1.5rem", { lineHeight: "45px" }],     // 24px
        "4xl": ["1.75rem", { lineHeight: "45px" }],    // 28px
        "5xl": ["2rem", { lineHeight: "57px" }],       // 32px
        "6xl": ["2.25rem", { lineHeight: "57px" }],    // 36px
        "7xl": ["2.5rem", { lineHeight: "57px" }],     // 40px
        "8xl": ["2.75rem", { lineHeight: "57px" }],    // 44px
        "9xl": ["3.125rem", { lineHeight: "57px" }],   // 50px
      },
 
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
 
      lineHeight: {
        "2xs": "18px",
        xs: "21px",
        sm: "22px",
        md: "25px",
        lg: "28px",
        xl: "31px",
        "2xl": "39px",
        "3xl": "45px",
        "4xl": "57px",
      },
 
      letterSpacing: {
        0: "0rem",
        100: ".001rem",
        200: ".001rem",
        300: ".002rem",
        400: ".003rem",
        500: ".003rem",
        600: ".004rem",
        "negative-100": "-.01rem",
        "negative-200": "-.02rem",
      },
    },
  },
  plugins: [],
};