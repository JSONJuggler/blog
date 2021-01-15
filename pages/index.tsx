import { makeStyles } from '@material-ui/core';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import Landing from '../composedComponents/Landing';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';

type HomeProps = {
  allPosts: Array<Post>;
};

const Home: React.FC<HomeProps> = ({ allPosts }) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Head>
        <title>Beau Reescano | Blog</title>
        <meta
          name="description"
          content="I'm a Full Stack web developer using the latest front-end and back-end
          technologies with a focus on Typescript, React JS, Next JS, and Node JS."
        />
        <meta name="google-site-verification" content="x0Muns5pK71I3AK6b3XmS8zvBwcMpuSodHaI4MJqr-A" />
      </Head>
      <div className={classes.appBarSpacer} />
      <Landing posts={allPosts} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'coverImage', 'author', 'excerpt']);

  return {
    props: { allPosts },
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
  },
  appBarSpacer: theme.mixins.toolbar,
}));

export default Home;
