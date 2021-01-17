import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import HeroStory from './HeroStory';
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
      <Grid container>
        <Grid item md={12}>
          <section className={classes.heroStory}>
            {heroPost && (
              <HeroStory
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                excerpt={heroPost.excerpt}
                author={heroPost.author}
                slug={heroPost.slug}
              />
            )}
          </section>
        </Grid>
        <Grid item sm={12}>
          <section className={classes.moreStories}>{morePosts.length > 0 && <MoreStories posts={morePosts} />}</section>
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  heroStory: {
    padding: theme.spacing(2),
  },
  moreStories: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  socials: {
    padding: theme.spacing(2),
  },
}));

export default Landing;
