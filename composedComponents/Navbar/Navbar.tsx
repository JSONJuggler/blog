import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import ThemeToggle from './ThemeToggle';
import Header from './Header';

type NavBarProps = {
  setIsDark: (isDark: boolean) => void;
};

const Navbar: React.FC<NavBarProps> = ({ setIsDark }) => {
  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Container component="nav" maxWidth="lg" disableGutters={true}>
        <Toolbar>
          <Grid container justify="space-around" alignItems="center">
            <Grid item xs={true}></Grid>
            <Grid item>
              <ThemeToggle setIsDark={setIsDark} />
            </Grid>
            <Grid item xs={12}>
              <Header />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
