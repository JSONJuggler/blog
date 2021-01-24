import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Copyright: React.FC = () => {
  const classes = useStyles();
  const isCentered = useMediaQuery('(min-width: 600px)');

  return (
    <Typography
      className={classes.root}
      color="textSecondary"
      variant="subtitle2"
      align={isCentered ? 'center' : 'left'}
    >
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
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
}));

export default Copyright;
