import { createTheme } from "@mui/material";

// Material UI の palette 上書き
const CustomTheme = createTheme({
  palette: {
    primary: {
      main: "#3b5ba7",
      light: "#5f7fc4",
      dark: "#2a437a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#5a78c2",
      light: "#7d9ae0",
      dark: "#3f5a97",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f0f4fc",
      paper: "#dbe5f6",
    },
    text: {
      primary: "#0a1035",
      secondary: "#3b5ba7",
    },
    error: {
      main: "#d32f2f",
      light: "#f44336",
      dark: "#9a0007",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ffa726",
      light: "#ffb74d",
      dark: "#c77800",
      contrastText: "#000000",
    },
    info: {
      main: "#0288d1",
      light: "#29b6f6",
      dark: "#01579b",
      contrastText: "#ffffff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#ffffff",
    },
    divider: "rgba(0, 0, 0, 0.12)",
  },
  typography: {
    fontFamily: "'Roboto', 'Noto Sans JP', sans-serif",
    allVariants: {
      color: "#0a1035",
      fontSize: 16,
      lineHeight: 1.8,
      fontWeight: 400,
    },
    h1: {
      fontSize: 40,
      fontWeight: 800,
      marginBottom: "12px",
      color: "#25221E",
    },
    subtitle1: {
      fontSize: 20,
      marginBottom: "8px",
      color: "rgba(0, 0, 0, 0.8)",
    },
  },
});

export default CustomTheme;
