import { blueGrey, deepPurple } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const PASTEL_PURPLE = '#b19cd9';
export const PASTEL_GRAY = '#cfcfc4';
export const LIGHT_GRAY = '#f7f7f8';
export const BLACK = '#000000';
export const WHITE = '#ffffff';

export const COLORS = {
  primary: {
    light: blueGrey[100],
    main: blueGrey[500],
  },
  secondary: {
    light: blueGrey[100],
    main: blueGrey[500],
  },
  background: LIGHT_GRAY,
  black: BLACK,
  white: WHITE,
};

// Create a theme instance.
let lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.primary.main,
      light: COLORS.primary.light,
    },
    secondary: {
      main: COLORS.secondary.main,
      light: COLORS.secondary.light,
    },
    type: 'light',
  },
});

let darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.primary.main,
      light: COLORS.primary.light,
    },
    secondary: {
      main: COLORS.primary.main,
      light: COLORS.primary.light,
    },
    type: 'dark',
  },
});

lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);

export { lightTheme, darkTheme };
