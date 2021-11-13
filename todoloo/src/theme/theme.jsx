import { createTheme } from "@mui/material/styles";

const pageFont = "'Noto sans', sans-serif";
const Theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          borderRadius: 25,
          paddingLeft: 20,
          paddingRight: 20,
          marginLeft: 5,
          marginRight: 5,
          textTransform: "capitalize",
          boxShadow: "none",
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#9575cd",
    },
    secondary: {
      main: "#3bc3c3",
    },
    tertiary: {
      main: "#FBEFEF",
    },
    warning: {
      main: "#ffd600",
    },
    background: {
      default: "#f5f5f5",
    },
  },

  typography: {
    fontFamily: pageFont,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    paddingTop: 0,
    paddingBottom: 20,

    h1: {
      fontFamily: pageFont,
      fontSize: 30,
      fontWeight: 800,
      paddingTop: 0,
      paddingBottom: 20,
      "@media (min-width:600px)": {
        fontSize: 48,
        paddingTop: 0,
      },
      "@media (min-width:1200px)": {
        fontSize: 60,
        paddingTop: 40,
      },
    },
    h2: {
      fontFamily: pageFont,
      fontSize: 25,
      "@media (min-width:600px)": {
        fontSize: 40,
      },
      fontWeight: 400,
      marginBottom: 20,
    },
    h3: {
      fontFamily: pageFont,
      fontSize: 20,
      "@media (min-width:600px)": {
        fontSize: 26,
      },
      "@media (min-width:900px)": {
        fontSize: 32,
      },
      fontWeight: 800,
      marginBottom: 20,
    },
  },
});

export default Theme;
