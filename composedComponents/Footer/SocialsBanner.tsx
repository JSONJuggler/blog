import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import { SvgTwitter, SvgGithub, SvgLinkedin } from '../../icons';

type LinkProps = {
  children: JSX.Element;
  href: string;
};

const Link: React.FC<LinkProps> = ({ children, href }) => {
  const style = {
    color: 'black',
  };

  return (
    <a href={href} style={style}>
      {children}
    </a>
  );
};

const Socials: React.FC = () => {
  return (
    <>
      <Grid item>
        <Link href="https://github.com/jsonjuggler">
          <Tooltip title="My Github">
            <IconButton aria-label="github">
              <SvgGithub size="1x" />
            </IconButton>
          </Tooltip>
        </Link>
      </Grid>
      <Grid item>
        <Link href="https://www.linkedin.com/in/beau-reescano-68704811b/">
          <Tooltip title="My Linkedin Page">
            <IconButton aria-label="Linkedin">
              <SvgLinkedin size="1x" />
            </IconButton>
          </Tooltip>
        </Link>
      </Grid>
      <Grid item>
        <Link href="https://twitter.com/JSONJuggler ">
          <Tooltip title="My Twitter">
            <IconButton aria-label="twitter">
              <SvgTwitter size="1x" />
            </IconButton>
          </Tooltip>
        </Link>
      </Grid>
    </>
  );
};

export default Socials;
