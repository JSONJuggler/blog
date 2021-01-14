import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../theme';

type LandingProps = {
  test?: string;
};

const Landing = (props: LandingProps) => {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {'Landing page'}
      </main>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    background: COLORS.primary,
  },
  content: {
    alignSelf: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 260,
  },
  appBarSpacer: theme.mixins.toolbar,
}));

export default Landing;
