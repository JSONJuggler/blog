import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import MoreStories from './MoreStories';
import Post from '../../types/post';

type LandingProps = {
  posts: Array<Post>;
};

const Landing: React.FC<LandingProps> = ({ posts }) => {
  const classes = useStyles();
  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  return (
    <>
      <section>{morePosts.length > 0 && <MoreStories posts={morePosts} />}</section>
    </>
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
    width: '100%',
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
