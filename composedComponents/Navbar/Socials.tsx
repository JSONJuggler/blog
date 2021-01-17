import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Tooltip } from '@material-ui/core';

import { SvgInstagram, SvgYoutube, SvgTwitch, SvgTwitter, SvgGithub, SvgLinkedin } from '../../icons';

type SocialProps = {
  isCentered: boolean;
  isLandingPage: boolean;
};

const Socials: React.FC<SocialProps> = ({ isCentered, isLandingPage }) => {
  const classes = useStyles();

  return (
    <>
      {isCentered && (
        <Grid container className={classes.container} justify="center">
          {renderSocials(isLandingPage)}
        </Grid>
      )}
      {!isCentered && (
        <Grid container className={classes.container} justify="flex-end">
          {renderSocials(isLandingPage)}
        </Grid>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    fontWeight: 'bold',
  },
  container: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(0),
    },
  },
}));

const renderSocials = (isLandingPage: boolean) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'SvgGithub':
        return <SvgGithub size={isLandingPage ? '2x' : '1x'} />;
      case 'SvgTwitter':
        return <SvgTwitter size={isLandingPage ? '2x' : '1x'} />;
      case 'SvgLinkedIn':
        return <SvgLinkedin size={isLandingPage ? '2x' : '1x'} />;
      case 'SvgTwitch':
        return <SvgTwitch size={isLandingPage ? '2x' : '1x'} />;
      case 'SvgYoutube':
        return <SvgYoutube size={isLandingPage ? '2x' : '1x'} />;
      case 'SvgInstagram':
        return <SvgInstagram size={isLandingPage ? '2x' : '1x'} />;
      default:
        return;
    }
  };

  const socials = [
    {
      link: 'https://twitter.com/JSONJuggler',
      toolTipLabel: 'My Twitter',
      ariaLabel: 'twitter',
      icon: getIcon('SvgTwitter'),
    },
    {
      link: 'https://github.com/jsonjuggler',
      toolTipLabel: 'My Github',
      ariaLabel: 'github',
      icon: getIcon('SvgGithub'),
    },
    {
      link: 'https://www.linkedin.com/in/beau-reescano/',
      toolTipLabel: 'My LinkedIn',
      ariaLabel: 'linkedin',
      icon: getIcon('SvgLinkedIn'),
    },
    {
      link: 'https://www.instagram.com/beaureescano/',
      toolTipLabel: 'My Instagram',
      ariaLabel: 'instagram',
      icon: getIcon('SvgInstagram'),
    },
    {
      link: 'https://www.twitch.tv/drees1992',
      toolTipLabel: 'My Twitch',
      ariaLabel: 'twitch',
      icon: getIcon('SvgTwitch'),
    },
    {
      link: 'https://www.youtube.com/channel/UCynL77MXCa27fwYCsDDmKSw',
      toolTipLabel: 'My Youtube',
      ariaLabel: 'youtube',
      icon: getIcon('SvgYoutube'),
    },
  ];

  return socials.map((social) => (
    <Grid key={social.link} item>
      <a href={social.link} aria-label={social.ariaLabel}>
        <Tooltip title={social.toolTipLabel}>
          <IconButton aria-label={social.ariaLabel}>{social.icon}</IconButton>
        </Tooltip>
      </a>
    </Grid>
  ));
};

export default Socials;
