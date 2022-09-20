import { createBreakpoints } from "@chakra-ui/theme-tools";
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  breakpoints: createBreakpoints({
    xs: "30em",
    sm: "36em",
    md: "46.25em",
    lg: "62.5em",
    xl: "78.125em",
    xxl: "95em"
  }),
  colors: {
    base: {
      50: "#eceff1",
      100: "#cfd8dc",
      200: "#b0bec5",
      300: "#90a4ae",
      400: "#78909c",
      500: "#607d8b",
      600: "#546e7a",
      700: "#455a64",
      800: "#37474f",
      900: "#263238",
      d100: "#171F23",
      d200: "#12181B",
      d400: "#0D1214",
      d700: "#080C0D"
    },
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2"
    },
    green: {
      "50": "#16E3BA",
      "100": "#13c7a3",
      "200": "#10aa8b",
      "300": "#0e8e74",
      "400": "#0b715d",
      "500": "#085546",
      "600": "#05392e",
      "700": "#031c17",
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        // bgImage: "url('/images/bg-1.jpg')",
        // bgRepeat: 'no-repeat',
        // bgSize: 'cover',
        // bgAttachment: 'fixed',
        color: 'gray.50'
      },
      h1: {
        fontSize: 'xl',
        mb: '4',
      },
      h2: {
        fontSize: 'xl',
        color: 'green.200',
        lineHeight: '1.3',
        margin: '0 0 0.5em 0'
      },
      p: {
        pb: '1.75em',
        color: '#3d4459',
      },
      ul: {
        margin: '0 0 1.5em 3em'
      },
      ol: {
        margin: '0 0 1.5em 3em'
      }
    },
  },
})