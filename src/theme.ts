import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f2e5ff",
      100: "#d4b5ff",
      200: "#b684fb",
      300: "#9955f8",
      400: "#7c24f5",
      500: "#630adb",
      600: "#4d07ab",
      700: "#37047c",
      800: "#21014c",
      900: "#0d001e",
    },
  },
});

export default theme;
