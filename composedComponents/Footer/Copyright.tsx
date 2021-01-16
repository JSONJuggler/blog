import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Copyright: React.FC = () => {
  return (
    <>
      <Typography variant="caption">
        {'Copyright © '}
        <Link href="https://github.com/jsonjuggler">Beau Reescano</Link> {new Date().getFullYear()}
        {'.'}
      </Typography>
    </>
  );
};

export default Copyright;
