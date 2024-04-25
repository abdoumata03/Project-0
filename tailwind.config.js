/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/ScoreBoard.jsx"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#171717",
          200: "#070707",
        },
        blueviolet: {
          100: "linear-gradient(90deg, hsla(271, 69%, 48%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)",
          200: "#7d26cd",
        },
        gainsboro: {
          100: "#e2e2e2",
          200: "rgba(226, 226, 226, 0.4)",
        },
        silver: {
          100: "#c9c9c9",
          200: "rgba(201, 201, 201, 0.09)",
        },
        white: "#fff",
        darkblue: "#00068d",
        mediumorchid: "#c66cff",
      },
      spacing: {},
      fontFamily: {
        "bord-demo": "'Bord'",
        "segoe-ui-variable": "'Segoe'",
      },
      borderRadius: {
        "9xl": "28px",
        "6xl": "25px",
        "13xl": "32px",
      },
    },
    fontSize: {
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "17xl": "35px",
      "3xl": "22px",
      "10xl": "29px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      base: "16px",
      xl: "20px",
      "9xl": "28px",
      lgi: "19px",
      "7xl": "26px",
      xs: "12px",
      "56xl": "75px",
      "26xl": "45px",
      "41xl": "60px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq814: {
        raw: "screen and (max-width: 814px)",
      },
      mq870: {
        raw: "screen and (max-width: 870px)",
      },
      mq765: {
        raw: "screen and (max-width: 765px)",
      },
      mq653: {
        raw: "screen and (max-width: 653px)",
      },
      mq540: {
        raw: "screen and (max-width: 540px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq480: {
        raw: "screen and (max-width: 480px)",
      },
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1000px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
