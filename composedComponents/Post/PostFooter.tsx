import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

import PostTag from './PostTag';

type PostFooterProps = {
  tags: string;
};

const PostBody: React.FC<PostFooterProps> = ({ tags }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" disableGutters>
      <Grid className={classes.gridContainer} container spacing={2}>
        {tags.split(',').map((item) => (
          <PostTag key={item} tag={item} />
        ))}
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export default PostBody;
