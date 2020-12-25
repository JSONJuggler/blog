import { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const classes = useStyles();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <div className={classes.root}>
      <Head>
        <meta name="author" content="Beau Reescano" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta prefix="og: http://ogp.me/ns#" property="og:title" content="Beau Reescano's Blog" />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:description"
          content="Hi, I am Beau Reescano and this is my blog."
        />
        <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://webdeveloperbeau.com/blog" />
        <meta prefix="og: http://ogp.me/ns#" property="og:image" content="https://webdeveloperbeau.com/blog.png" />
        <meta prefix="og: http://ogp.me/ns#" property="og:site_name" content="webdeveloperbeau.com/blog" />
        <meta prefix="og: http://ogp.me/ns#" property="og:image:width" content="2086" />
        <meta prefix="og: http://ogp.me/ns#" property="og:image:height" content="1538" />
        <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="JSONJuggler" />
      </Head>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default MyApp;
