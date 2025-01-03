/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        top: "#E7E5E4",
        bodycolor: "#F5F5F4",
        lightGrayBg: "#FAFAF9",
        dateBlack: "#0C0A09",
        submitBtn: "#C71D1D",
        listHover: "#f7f3f0",
        darkRedBg: "#c91d1d17",
        successGreen: "#16a34a",
      },
      colors: {
        dateBlack: "#0C0A09",
        gmt: "#A8A29E",
        timeLog: "#57534e",
        tabText: "#78716c",
        activeTab: "#C71D1D",
        pText: "#292524",
        pGray: "#44403c",
        lightGray: "#f5f5f4",
        darkRed: "#991b1b",
        borderGray: "#e7e5e4",
        labelGray: "#78716c",
        textRed: "#EF4444",
      },
      accentColor: {
        accentBlue: "#3b82f6",
      },
      padding: {
        3.3: "13px",
        18: "70px",
      },
      backgroundImage: {
        login_bg: "url(/login-bg.png)",
      },
      spacing: {
        9.5: "9.5rem",
      },
      width: {
        timeModal: "620px",
        submitModal: "600px",
      },
      minWidth: {
        login: "658px",
      },
      maxWidth: {
        contWidth: "1336px",
      },
      height: {
        contheight: "760px",
      },
      borderRadius: {
        toggle: "50px",
      },
      animation: {
        moving: "moving 0.7s ease",
        fadeIn: "fadeIn 0.3s ease-in",
        fadeOut: "fadeOut 0.3s ease-in",
      },
      keyframes: {
        moving: {
          "0%": {
            transform: "translateX(10px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          fadeIn: {
            "0%": { transform: "translateY(10px)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" },
          },
          fadeOut: {
            "0%": { opacity: "1" },
            "100%": { opacity: "0" },
          },
        },
      },
    },
  },
  plugins: [],
};
