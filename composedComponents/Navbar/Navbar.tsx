import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import ThemeToggle from './ThemeToggle';

type NavBarProps = {
  setIsDark: (isDark: boolean) => void;
};

const Navbar: React.FC<NavBarProps> = ({ setIsDark }) => {
  const classes = useStyles();

  return (
    <AppBar color="transparent" elevation={0} position="absolute">
      <Container component="nav" maxWidth="lg" disableGutters={true}>
        <Toolbar>
          <Grid container spacing={2} justify="space-around" alignItems="center">
            <Grid item xs={true} className={classes.desktopTextContainer}>
              <Typography className={classes.text} variant="h6">
                beau reescano
              </Typography>
            </Grid>
            <Grid item className={classes.desktopTextContainer}>
              <ThemeToggle setIsDark={setIsDark} />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  hidden: {
    visibility: 'hidden',
  },
  text: {},
  coloredNavBar: {
    background: theme.palette.background.default,
  },
  desktopTextContainer: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  mobileTextContainer: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  bounceAnimation: {
    position: 'fixed',
    animation: `$bounce 2s infinite`,
    top: 'auto',
    bottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      bottom: theme.spacing(6),
    },
  },
  '@keyframes bounce': {
    '0%': {
      transform: 'translateY(0)',
      opacity: '1',
    },
    '50%': {
      transform: 'translateY(30%)',
      opacity: '0',
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: '1',
    },
  },
}));

export default Navbar;
