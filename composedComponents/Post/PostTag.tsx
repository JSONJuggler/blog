import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

type TagProps = {
  tag: string;
};

const PostTag: React.FC<TagProps> = ({ tag }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Typography className={classes.root} variant="caption" color="textSecondary">
        {tag}
      </Typography>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default PostTag;
