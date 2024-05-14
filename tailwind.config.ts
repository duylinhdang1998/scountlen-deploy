import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#FA0513",
        "status-info-30": "#c1e3fc",
        "status-info-50": "#26a9f1",
        "status-info-70": "#0e6a9b",
        "status-success-30": "#bbe9df",
        "status-success-50": "#00b8a1",
        "status-success-70": "#007465",
        "status-warning-30": "#f8d7be",
        "status-warning-50": "#e18528",
        "status-warning-70": "#905211",
        "status-error-30": "#fed2d0",
        "status-error-50": "#ed7477",
        "status-error-70": "#984649",
        "alpha-50-error": "rgba(237, 116, 119, 0.1)",
        "alpha-50-warning": "rgba(225, 133, 40, 0.1)",
        "alpha-50-success": "rgba(0, 184, 161, 0.1)",
        "alpha-50-info": "rgba(38, 169, 241, 0.1)",
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
    },
  },
  plugins: [],
};
export default config;
