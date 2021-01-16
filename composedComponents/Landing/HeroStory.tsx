import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import Avatar from '../../components/Avatar';
import DateFormatter from '../../components/DateFormatter';
import CoverImage from '../../components/CoverImage';
import Link from 'next/link';
import Author from '../../types/author';

type HeroStoryProps = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroStory: React.FC<HeroStoryProps> = ({ title, coverImage, date, excerpt, author, slug }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <CoverImage title={title} src={coverImage} slug={slug} />
        </Grid>
        <Grid item sm={6}>
          <Typography color="textPrimary" component="h2" variant="h3" gutterBottom>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className={classes.anchor}>{title}</a>
            </Link>
          </Typography>
          <DateFormatter dateString={date} />
        </Grid>
        <Grid item sm={6}>
          <Typography color="textSecondary" variant="body1" paragraph>
            {excerpt}
          </Typography>
          <Avatar name={author.name} picture={author.picture} />
        </Grid>
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
}));

export default HeroStory;
