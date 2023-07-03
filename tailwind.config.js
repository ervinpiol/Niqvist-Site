/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RedHatDisplay: ["Red Hat Display", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        BGColor: "rgb(242, 242, 236)",
        BGLightBlack: "#212121",
        BGBlack: "#1a1a1a",
        LightRed: "rgb(227, 28, 28)",
        Separator: "#b9b9b9",
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
