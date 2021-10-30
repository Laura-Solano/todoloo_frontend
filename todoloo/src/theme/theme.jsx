import { createTheme } from "@mui/material/styles";

const globalTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#9575cd",
    },
    secondary: {
      main: "#3bc3c3",
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
  },
});

export default globalTheme;
