import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const Header: React.FC = () => {
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
    <>
      <Grid container alignItems="center">
        {isLandingPage && (
          <>
            <Grid item xs={12} md="auto">
              <Typography
                className={classes.title}
                align="center"
                color="textPrimary"
                variant="h1"
                component="h1"
                gutterBottom
              >
                <Link as="/" href="/">
                  <a className={classes.anchor}>{"beau's blog"}</a>
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={true}>
              <Typography
                className={classes.subTitle}
                align="right"
                color="textPrimary"
                variant="h4"
                component="p"
                gutterBottom
              >
                {'welcome to my piece of the web!'}
              </Typography>
              <Typography
                className={classes.centeredSubTitle}
                align="center"
                color="textPrimary"
                variant="h4"
                component="p"
                gutterBottom
              >
                {'welcome to my piece of the web!'}
              </Typography>
            </Grid>
          </>
        )}
        {!isLandingPage && (
          <>
            <Grid item xs={12} md="auto">
              <Typography
                className={classes.title}
                align="center"
                color="textPrimary"
                variant="h5"
                component="h1"
                gutterBottom
              >
                <Link as="/" href="/">
                  <a className={classes.anchor}>{"beau's blog"}</a>
                </Link>
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    fontWeight: 'lighter',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  centeredSubTitle: {
    fontWeight: 'lighter',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  anchor: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

export default Header;
