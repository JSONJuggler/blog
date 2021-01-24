import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import PostPreview from './PostPreview';
import Post from '../types/post';

type MoreStoriesProps = {
  posts: Array<Post>;
};

const MoreStories: React.FC<MoreStoriesProps> = ({ posts }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={4}>
        <Grid container item spacing={4} xs={12}>
          <Grid className={classes.sectionTitle} item xs={12}>
            <Typography className={classes.sectionTitle} color="textPrimary" component="h2" variant="h2">
              {'more stories'}
            </Typography>
          </Grid>
          {posts.map((post) => (
            <Grid xs={12} container item spacing={2} alignItems="center" key={post.slug}>
              <PostPreview
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                author={post.author}
                slug={post.slug}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles(() => ({
  sectionTitle: {
    fontWeight: 'bold',
  },
}));

export default MoreStories;
