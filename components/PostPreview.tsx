import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Link from 'next/link';

import Author from '../types/author';
import Avatar from './Avatar';
import DateFormatter from './DateFormatter';

type PostPreviewProps = {
  title: string;
  coverImage?: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview: React.FC<PostPreviewProps> = ({ title, date, excerpt, author, slug }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <Typography color="textPrimary" variant="h5" gutterBottom>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className={classes.anchor}>{title}</a>
          </Link>
        </Typography>
        <DateFormatter dateString={date} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="textSecondary" variant="body2" paragraph>
          {excerpt}
        </Typography>
        <Avatar name={author.name} picture={author.picture} />
      </Grid>
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
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}));

export default PostPreview;
