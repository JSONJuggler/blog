import { GetStaticProps } from 'next';

import Landing from '../composedComponents/Landing';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';

type HomeProps = {
  allPosts: Array<Post>;
};

const Home: React.FC<HomeProps> = ({ allPosts }) => {
  return (
    <>
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
