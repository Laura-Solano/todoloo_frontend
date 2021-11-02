import { createTheme } from "@mui/material/styles";

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
    type: "light",
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
    fontFamily: "'Noto sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    paddingTop: 0,
    paddingBottom: 20,
  },
});

export default Theme;
