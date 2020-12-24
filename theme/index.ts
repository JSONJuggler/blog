import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const BLACK = '#ffffff';

export const COLORS = {
  primary: BLACK,
  secondary: BLACK,
  background: BLACK,
};

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: COLORS.background,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
