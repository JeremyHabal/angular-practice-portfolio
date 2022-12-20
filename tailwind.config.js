/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      white: "#ffffff",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Bitter", "serif"],
      mono: ["Fira Code", "mono"],
    },
  },
  daisyui: {
    themes: [
      {
        jrTheme: {
          primary: "#5B2946",
          "primary-content": "#F4EBE2",
          secondary: "#F4EBE2",
          "secondary-content": "#5B2946",
          accent: "#F75A56",
          neutral: "#FFFFFF",
          "neutral-content": "#5B2946",
          "base-100": "#FFFFFF",
          "base-content": "#5B2946",
          "info-content": "#D5BCB4",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
