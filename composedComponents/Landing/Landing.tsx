import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

const Landing: React.FC = () => {
  const classes = useStyles();

  const alignedPrimaryContentOnPaper = clsx(classes.primaryContent, classes.paper);
  const alignedSecondaryContentOnPaper = clsx(classes.secondaryContent, classes.paper);

  return (
    <Container className={classes.root} component="main">
      <div className={alignedPrimaryContentOnPaper}>
        <Typography color="textPrimary">Landing Page</Typography>
        <Typography color="textSecondary">Landing Page</Typography>
      </div>
      <div className={alignedSecondaryContentOnPaper}>
        <Typography color="textPrimary">Landing Page</Typography>
        <Typography color="textSecondary">Landing Page</Typography>
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
  },
  primaryContent: {
    alignSelf: 'center',
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
  },
  secondaryContent: {
    alignSelf: 'center',
    background: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    alignSelf: 'center',
  },
}));

export default Landing;
