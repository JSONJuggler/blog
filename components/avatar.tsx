import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

type AvatarProps = {
  name: string;
  picture: string;
};

const Avatar: React.FC<AvatarProps> = ({ name, picture }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image className={classes.image} src={picture} height={50} width={50} alt={name} />
      <Typography className={classes.name} variant="body2">
        {name}
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    borderRadius: '50px',
  },
  name: {
    fontWeight: 'bold',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default Avatar;
