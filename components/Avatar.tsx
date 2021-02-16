import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

type AvatarProps = {
  name: string;
  picture?: string;
  dateString?: string;
  timeToRead?: number;
};

const Avatar: React.FC<AvatarProps> = ({ name, picture, dateString, timeToRead }) => {
  const classes = useStyles();
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <div className={classes.root}>
      {dateString && timeToRead && (
        <>
          {picture && (
            <Image
              className={classes.image}
              src={isProd ? '/blog' + picture : picture}
              height={50}
              width={50}
              alt={name}
            />
          )}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography className={classes.name} variant="body2">
              {name}
            </Typography>
            <div>
              <Typography className={classes.name} color="textSecondary" variant="body2">
                {timeToRead} min read
              </Typography>
            </div>
          </div>
        </>
      )}
      {!dateString && (
        <>
          {picture && <Image className={classes.image} src={picture} height={50} width={50} alt={name} />}
          <Typography className={classes.name} variant="body2">
            {name}
          </Typography>
        </>
      )}
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
