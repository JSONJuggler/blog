import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Post from '../../types/post';

type MoreStoriesProps = {
  posts: Array<Post>;
};

const MoreStories: React.FC<MoreStoriesProps> = ({ posts }) => {
  const classes = useStyles();

  const contentOnPaper = clsx(classes.content, classes.paper);

  return (
    <>
      <div className={contentOnPaper}>
        <Typography color="textPrimary" component="h2" variant="h2">
          More Stories
        </Typography>
        {posts.map((post) => (
          <Typography className={classes.postsItem} color="textSecondary" key={post.slug}>
            {post.title}
          </Typography>
        ))}
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    alignSelf: 'center',
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  postsItem: {
    '&:first-of-type:before': {
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      borderRadius: '30px',
      content: '""',
      display: 'block',
      height: '5px',
    },
    '&:after': {
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      borderRadius: '30px',
      content: '""',
      display: 'block',
      height: '5px',
    },
  },
  postsList: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default MoreStories;
