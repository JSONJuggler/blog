import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

type HeaderProps = {
  isLandingPage: boolean;
};

const Header: React.FC<HeaderProps> = ({ isLandingPage }) => {
  const classes = useStyles();

  return (
    <>
      {isLandingPage && (
        <>
          <Typography className={classes.title} align="left" color="textPrimary" variant="h1" component="h1">
            <Link as="/" href="/">
              <a className={classes.anchor}>{"beau's blog"}</a>
            </Link>
          </Typography>
        </>
      )}
      {!isLandingPage && (
        <>
          <Typography className={classes.smallTitle} color="textPrimary" variant="h5" component="h1">
            <Link as="/" href="/">
              <a className={classes.anchor}>{"beau's blog"}</a>
            </Link>
          </Typography>
        </>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
  },
  smallTitle: {
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
  },
  anchor: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

export default Header;
