import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Copyright: React.FC = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.root} color="textSecondary" variant="subtitle2">
      {'Copyright © '}
      <Link color="textPrimary" href="https://github.com/jsonjuggler">
        Beau Reescano
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // [theme.breakpoints.down('xs')]: {},
  },
}));

export default Copyright;
