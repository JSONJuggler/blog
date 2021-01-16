import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Link from 'next/link';

import Author from '../types/author';
import Avatar from './Avatar';
import CoverImage from './CoverImage';
import DateFormatter from './DateFormatter';

type PostPreviewProps = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview: React.FC<PostPreviewProps> = ({ title, coverImage, date, excerpt, author, slug }) => {
  const classes = useStyles();

  return (
    <>
      <CoverImage slug={slug} title={title} src={coverImage} />
      <Typography color="textPrimary" variant="h4" gutterBottom>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className={classes.anchor}>{title}</a>
        </Link>
      </Typography>
      <DateFormatter dateString={date} />
      <Typography color="textSecondary" variant="body2" paragraph>
        {excerpt}
      </Typography>
      <Avatar name={author.name} picture={author.picture} />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  anchor: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:visited': {
      color: theme.palette.text.secondary,
    },
  },
}));

export default PostPreview;
