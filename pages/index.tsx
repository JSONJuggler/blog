import { GetStaticProps } from 'next';
import Head from 'next/head';

import Landing from '../composedComponents/Landing';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';

type HomeProps = {
  allPosts: Array<Post>;
};

const Home: React.FC<HomeProps> = ({ allPosts }) => {
  return (
    <>
      <Head>
        <title>blog | beau reescano </title>
        <meta prefix="og: http://ogp.me/ns#" property="og:title" content="Beau Reescano's Blog" />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:description"
          content="Hi, I'm Beau Reescano. Welcome to my blog! I'm full stack web developer with a passion for everything web design. I'm creating websites and webapps using cutting edge web technologies."
        />
        <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://webdeveloperbeau.com/blog" />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image"
          content="https://webdeveloperbeau.com/blog/assets/imgs/blog.png"
        />
        <meta prefix="og: http://ogp.me/ns#" property="og:site_name" content="webdeveloperbeau.com/blog" />
        <meta prefix="og: http://ogp.me/ns#" property="og:image:width" content="2086" />
        <meta prefix="og: http://ogp.me/ns#" property="og:image:height" content="1538" />
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
