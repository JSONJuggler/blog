import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Copyright: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.root} variant="caption">
        {'Copyright © '}
        <Link href="https://github.com/jsonjuggler">Beau Reescano</Link> {new Date().getFullYear()}
        {'.'}
      </Typography>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3),
  },
}));

export default Copyright;
