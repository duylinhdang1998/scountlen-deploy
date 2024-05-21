import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: false,
  },
  important: true,
  theme: {
    extend: {
      colors: {
        black: "rgba(11, 11, 13, 1)",
        primary: "#FF57C1",
        "neutral-10": "#eff2f4",
        "neutral-30": "#dcdee0",
        "neutral-50": "#969A9C",
        "neutral-70": "#616465",
        "neutral-80": "#46484a",
        "neutral-90": "#222425",
        "neutral-95": "#141618",
        "status-success": "#00b8a1",
        "status-warning": "#e18528",
        "status-alert": "#ed7477",
        "status-info": "#26a9f1",
        "alpha-neutral": "rgba(156, 159, 161, 0.10)",
        "alpha-brand": "rgba(250, 5, 19, 0.1)",
        "alpha-info": "rgba(38, 169, 241, 0.1)",
        "alpha-success": "rgba(0, 184, 161, 0.1)",
        "alpha-warning": "rgba(225, 133, 40, 0.1)",
        "alpha-alert": "rgba(237, 116, 119, 0.1)",
      },
      borderRadius: {
        "big-xl": "64px",
      },
      backgroundImage: {
        "primary-linear":
          "linear-gradient(90deg, #FF57C1 -818.19%, #BC30E3 540.96%)",
      },
      animation: {
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        leave: "leave 150ms ease-in forwards",
        "fade-in-forward":
          "fade-in-forward 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
      keyframes: {
        enter: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        leave: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-in-forward": {
          "0%": {
            transform: "translateZ(-80px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateZ(0px)",
            opacity: "1",
          },
        },
      },
      fontSize: {
        "lg-body": [
          "18px",
          {
            fontWeight: 600,
            lineHeight: "28px",
          },
        ],
        "md-body": [
          "16px",
          {
            fontWeight: 600,
            lineHeight: "24px",
          },
        ],
        "sm-body": [
          "14px",
          {
            fontWeight: 600,
            lineHeight: "20px",
          },
        ],
        "xs-body": [
          "12px",
          {
            fontWeight: 600,
            lineHeight: "16px",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
