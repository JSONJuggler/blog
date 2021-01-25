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
          <meta prefix="og: http://ogp.me/ns#" property="og:title" content="Beau Reescano's Blog" />
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:description"
            content="Hi, I'm Beau Reescano. Welcome to my blog! I'm full stack web developer with a passion for everything web design. I'm creating websites and webapps using cutting edge web technologies."
          />
          <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://webdeveloperbeau.com/blog" />
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:image"
            content="https://webdeveloperbeau.com/imgs/blog.png"
          />
          <meta prefix="og: http://ogp.me/ns#" property="og:site_name" content="webdeveloperbeau.com/blog" />
          <meta prefix="og: http://ogp.me/ns#" property="og:image:width" content="2086" />
          <meta prefix="og: http://ogp.me/ns#" property="og:image:height" content="1538" />
          <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="JSONJuggler" />
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
