import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import PostPreview from '../../components/PostPreview';
import Post from '../../types/post';

type MoreStoriesProps = {
  posts: Array<Post>;
};

const MoreStories: React.FC<MoreStoriesProps> = ({ posts }) => {
  const classes = useStyles();

  return (
    <>
      <Typography color="textPrimary" component="h2" variant="h1">
        {'More Stories'}
      </Typography>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid xs={12} sm={6} md={4} item className={classes.postsItem} key={post.slug}>
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              excerpt={post.excerpt}
              author={post.author}
              slug={post.slug}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  postsItem: {
    marginTop: theme.spacing(2),
  },
}));

export default MoreStories;
