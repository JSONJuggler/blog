import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Container } from '@material-ui/core';
import useDarkMode from 'use-dark-mode';

import Navbar from '../composedComponents/Navbar';
import Footer from '../composedComponents/Footer';
import { lightTheme, darkTheme } from '../theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const classes = useStyles();
  const darkMode = useDarkMode(true);
  const description = "Hi, I'm a Full Stack React and ReactNative developer and welcome to my blog!";

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <div className={classes.root}>
        <Head>
          <meta name="author" content="Beau Reescano" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Navbar toggleDarkMode={darkMode.toggle} isDarkMode={darkMode.value} />
        <Container className={classes.container} maxWidth="lg" disableGutters={true} component="main">
          <Component {...pageProps} />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
}));

export default MyApp;
