import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import PostPreview from '../PostPreview';
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
          <div className={classes.postsItem} key={post.slug}>
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              excerpt={post.excerpt}
              author={post.author}
              slug={post.slug}
            />
          </div>
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
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.text.secondary : theme.palette.text.secondary,
      content: '""',
      display: 'block',
      height: '2px',
    },
    '&:after': {
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.text.secondary : theme.palette.text.secondary,
      content: '""',
      display: 'block',
      height: '2px',
    },
  },
}));

export default MoreStories;
