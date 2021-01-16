import { makeStyles } from '@material-ui/core/styles';

import Copyright from './Copyright';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Copyright />
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
  },
}));

export default Footer;
