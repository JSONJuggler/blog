import Head from 'next/head';

import Post from '../../types/post';

type MetaProps = {
  post: Post;
};

const Meta: React.FC<MetaProps> = ({ post }) => {
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <Head>
      <title>{post.title.toLocaleLowerCase()} | blog | beau reescano</title>
      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:image"
        content={isProd ? 'blog' + post.ogImage.url : post.ogImage.url}
      />
      <meta
        name="description"
        content="I'm a Full Stack web developer using the latest front-end and back-end
          technologies with a focus on Typescript, React JS, Next JS, and Node JS."
      />
      <meta name="author" content={post.author.name} />
      <meta prefix="og: http://ogp.me/ns#" property="og:title" content={post.title} />
      <meta prefix="og: http://ogp.me/ns#" property="og:description" content={post.excerpt} />
      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:url"
        content={'https://webdeveloperbeau.com/blog/' + post.slug}
      />

      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:site_name"
        content={'https://webdeveloperbeau.com/blog/' + post.slug}
      />
      <meta prefix="og: http://ogp.me/ns#" property="og:image:width" content="1920" />
      <meta prefix="og: http://ogp.me/ns#" property="og:image:height" content="960" />
      <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="JSONJuggler" />
    </Head>
  );
};

export default Meta;
