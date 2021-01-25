import Head from 'next/head';
import { GetStaticProps } from 'next';

import Landing from '../composedComponents/Landing';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';

type HomeProps = {
  allPosts: Array<Post>;
};

const Home: React.FC<HomeProps> = ({ allPosts }) => {
  const description = "Hi, I'm a Full Stack React and ReactNative developer and welcome to my blog!";

  return (
    <>
      <Head>
        <title>blog | beau reescano </title>
        <meta name="description" content={description} />
        <meta prefix="og: http://ogp.me/ns#" property="og:image" content="/assets/blog/blog.png" />

        <meta name="author" content="Beau Reescano" />
        <meta prefix="og: http://ogp.me/ns#" property="og:title" content="beau's blog" />
        <meta prefix="og: http://ogp.me/ns#" property="og:description" content={description} />
        <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://blog.webdeveloperbeau.com/" />

        <meta prefix="og: http://ogp.me/ns#" property="og:site_name" content="https://blog.webdeveloperbeau.com/" />
        <meta prefix="og: http://ogp.me/ns#" property="og:image:width" content="1920" />
        <meta prefix="og: http://ogp.me/ns#" property="og:image:height" content="960" />
        <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="JSONJuggler" />
      </Head>
      <Landing posts={allPosts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'coverImage', 'author', 'excerpt']);

  return {
    props: { allPosts },
  };
};

export default Home;
