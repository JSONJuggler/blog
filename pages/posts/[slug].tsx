import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Grid, Typography } from '@material-ui/core';

import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../types/post';
import MoreStories from '../../components/MoreStories';
import PostComponent from '../../composedComponents/Post';

type PostProps = {
  post: PostType;
  allPosts: Array<PostType>;
};

const Post: React.FC<PostProps> = ({ post, allPosts }) => {
  const classes = useStyles();
  const router = useRouter();

  const morePosts = allPosts.filter((item) => {
    if (post.slug !== item.slug) {
      return true;
    }
  });

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <Typography>Loading…</Typography>
      ) : (
        <>
          <Grid className={classes.container} container spacing={2}>
            <Grid component="article" item xs={12}>
              <PostComponent post={post} />
            </Grid>
            {morePosts.length > 0 && (
              <Grid component="section" item xs={12}>
                <MoreStories posts={morePosts.slice(0, 2)} />
              </Grid>
            )}
          </Grid>
        </>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
}));

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug as string, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'excerpt',
    'tags',
  ]);
  const content = await markdownToHtml(post.content || '');
  const allPosts = getAllPosts(['slug', 'title', 'date', 'coverImage', 'author', 'excerpt']);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      allPosts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
};
