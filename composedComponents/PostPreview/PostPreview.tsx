import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Author from '../../types/author';

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

  const contentOnPaper = clsx(classes.content, classes.paper);

  return (
    <>
      <div className={contentOnPaper}>
        <Typography color="textSecondary">{title}</Typography>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    alignSelf: 'center',
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    alignSelf: 'center',
  },
}));

export default PostPreview;
