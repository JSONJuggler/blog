import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Grid } from '@material-ui/core';

import ThemeToggle from './ThemeToggle';
import Header from './Header';

type NavBarProps = {
  setIsDark: (isDark: boolean) => void;
};

const Navbar: React.FC<NavBarProps> = ({ setIsDark }) => {
  const classes = useStyles();
  const { asPath, route } = useRouter();
  const [isLandingPage, setIsLandingPage] = useState(() => {
    if (asPath === '/' && route === '/') {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (asPath === '/' && route === '/') {
      setIsLandingPage(true);
    } else {
      setIsLandingPage(false);
    }
  }, [asPath, route]);

  return (
    <AppBar className={classes.appBar} color="transparent" elevation={isLandingPage ? 0 : 6} position="static">
      <Container component="nav" maxWidth="lg" disableGutters={true}>
        <Toolbar>
          <Grid container>
            <Grid item xs={true}></Grid>
            <Grid item>
              <ThemeToggle setIsDark={setIsDark} />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid container item justify="center">
              <Grid item xs={true}>
                <Header isLandingPage={isLandingPage} />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: theme.spacing(1),
  },
}));

export default Navbar;
