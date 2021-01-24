import { Grid, IconButton, Tooltip } from '@material-ui/core';

import { SvgInstagram, SvgYoutube, SvgTwitch, SvgTwitter, SvgGithub, SvgLinkedin } from '../../icons';

type SocialProps = {
  isLandingPage: boolean;
};

const Socials: React.FC<SocialProps> = ({ isLandingPage }) => {
  return <>{renderSocials(isLandingPage)}</>;
};

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
      link: 'https://www.linkedin.com/in/beau-reescano/',
      toolTipLabel: 'My LinkedIn',
      ariaLabel: "beau's linkedin",
      icon: getIcon('SvgLinkedIn'),
    },
    {
      link: 'https://github.com/jsonjuggler',
      toolTipLabel: 'My Github',
      ariaLabel: "beau's github",
      icon: getIcon('SvgGithub'),
    },
    {
      link: 'https://twitter.com/JSONJuggler',
      toolTipLabel: 'My Twitter',
      ariaLabel: "beau's twitter",
      icon: getIcon('SvgTwitter'),
    },
    {
      link: 'https://www.instagram.com/beaureescano/',
      toolTipLabel: 'My Instagram',
      ariaLabel: "beau's instagram",
      icon: getIcon('SvgInstagram'),
    },
    // {
    //   link: 'https://www.twitch.tv/drees1992',
    //   toolTipLabel: 'My Twitch',
    //   ariaLabel: "beau's twitch",
    //   icon: getIcon('SvgTwitch'),
    // },
    // {
    //   link: 'https://www.youtube.com/channel/UCynL77MXCa27fwYCsDDmKSw',
    //   toolTipLabel: 'My Youtube',
    //   ariaLabel: "beau's youtube",
    //   icon: getIcon('SvgYoutube'),
    // },
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
