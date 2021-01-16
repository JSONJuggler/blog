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
  return (
    <AppBar color="transparent" elevation={0} position="absolute">
      <Container component="nav" maxWidth="lg" disableGutters={true}>
        <Toolbar>
          <Grid container spacing={2} justify="space-around" alignItems="center">
            <Grid item xs={true}>
              <Typography variant="h6">beau reescano</Typography>
            </Grid>
            <Grid item>
              <ThemeToggle setIsDark={setIsDark} />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
