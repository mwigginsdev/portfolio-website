import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#1E1E1E',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    text: {
      main: '#E3E3E3',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    cyan: {
      light: '#AEDEEA',
      main: '#38AECC',
      dark: '#38AECC',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    orange: {
      light: '#FFAC70',
      main: '#FF9B54',
      dark: '#FF9B54',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    coral: {
      light: '#FFB499',
      main: '#FF7F51',
      dark: '#FF7F51',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    amaranth: {
      light: '#E28D9A',
      main: '#CE4257',
      dark: '#CE4257',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
  }
});

export default theme;