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
          900: "#1A1F4A",
          800: "#222D64",
          700: "#293B7D",
          600: "#314997",
          500: "#3A57B1",
          400: "#6277C1",
          300: "#8A98D1",
          200: "#B3BAE1",
          100: "#D9DCF0",
          50: "#F0F2FA",
        },
        secondary: {
          DEFAULT: "#FF6912",
          900: "#4A1B00",
          800: "#732800",
          700: "#993400",
          600: "#CC4400",
          500: "#FF6912",
          400: "#FF863F",
          300: "#FFA066",
          200: "#FFBB8C",
          100: "#FFD6B3",
          50: "#FFF0E6",
        },
        title: {
          DEFAULT: "#2E3786",
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
        interLight: ["inter-light"],
        interRegular: ["inter-regular"],
        interMedium: ["inter-medium"],
        interSemibold: ["inter-semibold"],
        interBold: ["inter-bold"],
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
          fontFamily: theme("fontFamily.interBold"),
          fontWeight: "700",
        },
        ".font-medium": {
          fontFamily: theme("fontFamily.interMedium"),
          fontWeight: "500",
        },
        ".font-semibold": {
          fontFamily: theme("fontFamily.interSemibold"),
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
            fontFamily: "inter-regular",
            fontWeight: "400",
          },
          h1: {
            fontSize: "48px",
            lineHeight: "60px",
            color: "#2E3786",
            fontFamily: "inter-bold",
            fontWeight: "600",
          },
          h2: {
            fontSize: "36px",
            lineHeight: "44px",
            color: "#2E3786",
            fontFamily: "inter-medium",
            fontWeight: "500",
          },
          h3: {
            fontSize: "24px",
            lineHeight: "32px",
            color: "#2E3786",
            fontFamily: "inter-regular",
            fontWeight: "700",
          },
          h4: {
            fontSize: "20px",
            lineHeight: "28px",
            color: "#2E3786",
            fontFamily: "inter-regular",
            fontWeight: "400",
          },
          h6: {
            fontSize: "16px",
            lineHeight: "24px",
            color: "#2E3786",
            fontFamily: "inter-regular",
            fontWeight: "600",
          },
          label: {
            fontFamily: "inter-semibold",
            fontWeight: "600",
            color: "#1560AA",
          },
          p: {
            fontSize: "16px",
            lineHeight: "24px",
            fontFamily: "inter-regular",
            fontWeight: "400",
          },
        });
    },
    function ({ addComponents, theme }) {
      addComponents({
        ".action-button": {
          color: `${theme("colors.white")} !important`,
          fontWeight: "600 !important",
          padding: "0.5rem 1rem !important",
          transition:
            "background-color 0.2s ease, transform 0.2s ease !important",
          display: "inline-flex !important",
          alignItems: "center !important",
          justifyContent: "center !important",
        },

        ".action-button:disabled": {
          opacity: "0.5 !important",
          cursor: "not-allowed !important",
        },
      });
    },
  ],
};
