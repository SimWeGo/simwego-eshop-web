/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E3786",
        secondary: "#FF6912",
        background: "#FAF2E0",
        primary: {
          DEFAULT: "#2E3786",
          900: "#12174e",
          800: "#1a2361",
          700: "#223174",
          600: "#2a3f87",
          500: "#324c9a",
          400: "#3b5aae",
          300: "#4467c1",
          200: "#4c75d4",
          100: "#557ff0",
          50:  "#e6ecff",     
        },
       // #7dcef0
       // #FF6912",
        secondary: {
          DEFAULT: "#7dcef0",
          900: "#4aa3d6",
          800: "#5ab1e0",
          700: "#6abff0",
          600: "#7dd0ff",
          500: "#8de0ff",
          400: "#9eeaff",
          300: "#aef4ff",
          200: "#bff8ff",
          100: "#d0fcff",
          50:  "#e6fcff",     
        },

        error: "#FF0000",
        success: "#009165",
        warning: "#F68C4E",
      },
      borderColor: {
        shade: {
          900: "#2c2b2b",
          800: "#393838",
          700: "#464444",
          600: "#535151",
          500: "#605e5e",
          400: "#6d6a6a",
          300: "#7a7777",
        },
      },
      boxShadow: {
        sm: "0px 0px 4.08px 0px #0000001f",
        md: "0px 0px 8px 0px #0000003f",
      },
      spacing: {
        xs: "0.5rem",
        sm: "0.7rem",
        base: "1rem",
      },
      backgroundColor: {
        bgLight: "#f2f4f7",
        bgGrey: "#ececec",
      },
      textColor: {
        content: {
          900: "#2c2b2b",
          800: "#393838",
          700: "#464444",
          600: "#535151",
          500: "#605e5e",
          400: "#6d6a6a",
          300: "#7a7777",
        },
      },
      fontFamily: {
        quicksandLight: ["quicksand-light"],
        quicksandRegular: ["quicksand-regular"],
        quicksandMedium: ["quicksand-medium"],
        quicksandSemibold: ["quicksand-semibold"],
        quicksandBold: ["quicksand-bold"],
        inter: ["Inter"],
      },

      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
      },
      maxWidth: {
        xxl: "2000px",
      },
      screens: {
        xs: "475px",
      },
      borderRadius: {
        DEFAULT: "10px",
        lg: "20px",
        md: "7px",
        sm: "3px",
      },
      animation: {
        slowspin: "spin 3s linear infinite", // Slower (3s per rotation)
        fastspin: "spin 500ms linear infinite", // Faster (0.5s per rotation)
      },
    },
  },
  plugins: [
    function ({ addComponents, addBase, theme }) {
      addComponents({
        ".font-bold": {
          fontFamily: theme("fontFamily.inter"),
          fontWeight: "700",
        },
        ".font-medium": {
          fontFamily: theme("fontFamily.inter"),
          fontWeight: "500",
        },
        ".font-semibold": {
          fontFamily: theme("fontFamily.inter"),
          fontWeight: "600",
        },
      }),
      
      addBase({
        ":root": {
          "--error": theme("colors.error"),
          "--warning": theme("colors.warning"),
          "--success": theme("colors.success"),
        },
        body: {
          color: "#122644",
          fontSize: "1rem",
          fontFamily: "Inter",
          fontWeight: "400",
        },
        h1: {
          fontSize: "48px",
          lineHeight: "60px",
          color: "#2E3786",
          fontFamily: "Inter",
          fontWeight: "600",
        },
        h2: {
          fontSize: "36px",
          lineHeight: "44px",
          color: "#2E3786",
          fontFamily: "Inter",
          fontWeight: "500",
        },
        h3: {
          fontSize: "24px",
          lineHeight: "32px",
          color: "#2E3786",
          fontFamily: "Inter",
          fontWeight: "700",
        },
        h4: {
          fontSize: "20px",
          lineHeight: "28px",
          color: "#2E3786",
          fontFamily: "Inter",
          fontWeight: "400",
        },
        h6: {
          fontSize: "16px",
          lineHeight: "24px",
          color: "#2E3786",
          fontFamily: "Inter",
          fontWeight: "600",
        },
        label: {
          fontFamily: "Inter",
          fontWeight: "600",
          color: "#1560AA",
        },
        p: {
          fontSize: "16px",
          lineHeight: "24px",
          fontFamily: "Inter",
          fontWeight: "400",
        },
      });
      
      
    },
    function ({ addComponents, theme }) {
      addComponents({
        ".action-button": {
          backgroundColor: `${theme("colors.secondary.DEFAULT")} !important`,
          color: `${theme("colors.white")} !important`,
          fontWeight: "600 !important",
          padding: "0.5rem 1rem !important",
          borderRadius: `${theme("borderRadius.md")} !important`,
          transition: "background-color 0.2s ease, transform 0.2s ease !important",
          display: "inline-flex !important",
          alignItems: "center !important",
          justifyContent: "center !important",
        },
        ".action-button:hover": {
          backgroundColor: `${theme("colors.secondary.600")} !important`,
        },
        ".action-button:active": {
          backgroundColor: `${theme("colors.secondary.700")} !important`,
        },
        ".action-button:disabled": {
          opacity: "0.5 !important",
          cursor: "not-allowed !important",
        },
      });
    }
    
  ],
};
