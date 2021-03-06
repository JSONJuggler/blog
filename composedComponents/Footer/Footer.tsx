import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Link, Typography } from '@material-ui/core';

import Copyright from './Copyright';
import Socials from './Socials';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.footer} alignContent="center" component="footer">
        <Container maxWidth="lg" disableGutters>
          <Grid container item className={classes.footerItemParent} component="footer">
            <Grid className={classes.footerItem} container item xs={12} sm={4}>
              <Grid xs={12} item>
                <Typography variant="h6">{"Beau's Blog"}</Typography>
              </Grid>
              <Grid className={classes.copyright} item>
                <Copyright />
              </Grid>
            </Grid>
            <Grid className={classes.footerItem} container item alignContent="flex-start" xs={12} sm={4}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">{'Personal Projects'}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2">
                  <Link color="textPrimary" href="https://manga-back.webdeveloperbeau.com/">
                    {'Manga API'}
                  </Link>
                </Typography>
                <Typography variant="subtitle2">
                  <Link color="textPrimary" href="https://webdeveloperbeau.com/jobbie">
                    {'Jobbie'}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid className={classes.footerItem} container item xs={12} sm={4}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">{'Find me on'}</Typography>
              </Grid>
              <Socials />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  copyright: {
    [theme.breakpoints.up('sm')]: {
      marginTop: 'auto',
    },
  },
  footer: {
    paddingTop: theme.spacing(10),
    background: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
  },
  footerItem: {
    padding: theme.spacing(2),
  },
  footerItemParent: {
    padding: theme.spacing(2),
  },
}));

export default Footer;
