import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

const Landing: React.FC = () => {
  const classes = useStyles();

  const alignedContentOnPaper = clsx(classes.content, classes.paper);

  return (
    <Container className={classes.root} component="main">
      <div className={alignedContentOnPaper}>
        <Typography color="textPrimary">Landing Page</Typography>
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
  content: {
    alignSelf: 'center',
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
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
