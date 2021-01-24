import { Grid, IconButton, Link, Tooltip, Typography } from '@material-ui/core';

import { SvgInstagram, SvgYoutube, SvgTwitch, SvgTwitter, SvgGithub, SvgLinkedin } from '../../icons';

const Socials: React.FC = () => {
  return <>{renderSocials()}</>;
};

const renderSocials = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'SvgGithub':
        return <SvgGithub size="1x" />;
      case 'SvgTwitter':
        return <SvgTwitter size="1x" />;
      case 'SvgLinkedIn':
        return <SvgLinkedin size="1x" />;
      case 'SvgTwitch':
        return <SvgTwitch size="1x" />;
      case 'SvgYoutube':
        return <SvgYoutube size="1x" />;
      case 'SvgInstagram':
        return <SvgInstagram size="1x" />;
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
    {
      link: 'https://www.twitch.tv/drees1992',
      toolTipLabel: 'My Twitch',
      ariaLabel: "beau's twitch",
      icon: getIcon('SvgTwitch'),
    },
    {
      link: 'https://www.youtube.com/channel/UCynL77MXCa27fwYCsDDmKSw',
      toolTipLabel: 'My Youtube',
      ariaLabel: "beau's youtube",
      icon: getIcon('SvgYoutube'),
    },
  ];

  return socials.map((social) => (
    <Grid key={social.link} container item alignItems="center">
      <Grid item xs="auto">
        <a href={social.link} aria-label={social.ariaLabel}>
          <Tooltip title={social.toolTipLabel}>
            <IconButton size="small" aria-label={social.ariaLabel}>
              {social.icon}
            </IconButton>
          </Tooltip>
        </a>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2">
          <Link color="textPrimary" href={social.link}>
            {social.toolTipLabel}
          </Link>
        </Typography>
      </Grid>
    </Grid>
  ));
};

export default Socials;
