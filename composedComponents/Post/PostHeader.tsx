import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

import Avatar from '../../components/Avatar';
import CoverImage from '../../components/CoverImage';
import Author from '../../types/author';
import Share from './Share';

type PostHeaderProps = {
  title: string;
  coverImage?: string;
  date: string;
  author: Author;
  timeToRead: number;
  slug: string;
};

const PostHeader: React.FC<PostHeaderProps> = ({ title, coverImage, date, author, timeToRead, slug }) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} variant="h1" component="h1" paragraph>
        {title}
      </Typography>
      <div className={classes.coverImage}>{coverImage && <CoverImage title={title} src={coverImage} />}</div>
      <Container className={classes.avatar} maxWidth="sm" disableGutters>
        <Grid container>
          <Grid item xs={5}>
            <Avatar name={author.name} picture={author.picture} dateString={date} timeToRead={timeToRead} />
          </Grid>
          <Grid container item xs={7} justify="flex-end">
            <Typography className={classes.share} color="textPrimary" variant="body1">
              {'share:'}
            </Typography>
            <Share slug={slug} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginBottom: theme.spacing(2),
  },
  coverImage: {
    marginBottom: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
  },
  share: {
    marginTop: theme.spacing(1.5),
  },
}));

export default PostHeader;
