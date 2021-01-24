import PostType from '../../types/post';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import Meta from './Meta';

type PostProps = {
  post: PostType;
};

const Post: React.FC<PostProps> = ({ post }) => {
  const wordCount = post.content.split(' ').length;
  const timeToRead = Math.ceil(wordCount / 275);

  return (
    <>
      <Meta post={post} />
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
        timeToRead={timeToRead}
        slug={post.slug}
      />
      <PostBody content={post.content} excerpt={post.excerpt} />
      {post.tags && <PostFooter tags={post.tags} />}
    </>
  );
};

export default Post;
