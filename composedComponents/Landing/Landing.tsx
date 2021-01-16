import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
      <section className={classes.moreStories}>{morePosts.length > 0 && <MoreStories posts={morePosts} />}</section>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  heroStory: {
    padding: theme.spacing(2),
  },
  moreStories: {
    flexGrow: 1,
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
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    alignSelf: 'center',
  },
}));

export default Landing;
