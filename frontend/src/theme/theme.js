import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2563EB",
    },
    secondary: {
      main: "#0F172A",
    },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
    success: {
      main: "#10B981",
    },
    warning: {
      main: "#F59E0B",
    },
    error: {
      main: "#EF4444",
    },
  },

  typography: {
  fontFamily: [
    '"Plus Jakarta Sans"',
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    "sans-serif",
  ].join(","),

  h3: {
    fontWeight: 800,
  },

  h4: {
    fontWeight: 800,
  },

  h5: {
    fontWeight: 700,
  },

  h6: {
    fontWeight: 700,
  },

  button: {
    textTransform: "none",
    fontWeight: 700,
  },
},

  shape: {
    borderRadius: 16,
  },
});

export default theme;