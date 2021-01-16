import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from './Copyright';
import SocialsBanner from './SocialsBanner';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container component="footer" className={classes.root} justify="center" alignItems="center" direction="column">
      <Grid container justify="center" alignItems="center">
        <SocialsBanner />
      </Grid>
      <Grid item>
        <Copyright />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginTop: 'auto',
  },
}));

export default Footer;
