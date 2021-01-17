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
      <Typography className={classes.sectionTitle} color="textPrimary" component="h2" variant="h2">
        {'more stories'}
      </Typography>
      <Grid container spacing={4}>
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
  sectionTitle: {
    fontWeight: 'bold',
  },
  postsItem: {
    marginTop: theme.spacing(2),
  },
}));

export default MoreStories;
