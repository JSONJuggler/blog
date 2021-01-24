import { Grid, IconButton, Tooltip } from '@material-ui/core';

import { SvgFacebook, SvgTwitter, SvgGithub, SvgLinkedin } from '../../icons';

type ShareProp = {
  slug: string;
};

const Share: React.FC<ShareProp> = ({ slug }) => {
  return <>{renderIcons(slug)}</>;
};

const renderIcons = (slug: string) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'SvgGithub':
        return <SvgGithub size={'1x'} />;
      case 'SvgTwitter':
        return <SvgTwitter size={'1x'} />;
      case 'SvgLinkedIn':
        return <SvgLinkedin size={'1x'} />;
      case 'SvgFacebook':
        return <SvgFacebook size={'1x'} />;
      default:
        return;
    }
  };

  const socials = [
    {
      shareUrl: 'https://www.linkedin.com/shareArticle?mini=true&url=',
      toolTipLabel: 'Share on Linked',
      ariaLabel: 'share on linkedin',
      icon: getIcon('SvgLinkedIn'),
    },
    {
      shareUrl: 'https://twitter.com/intent/tweet?url=',
      toolTipLabel: 'Share on Twitter',
      ariaLabel: 'share on twitter',
      icon: getIcon('SvgTwitter'),
    },
    {
      shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=',
      toolTipLabel: 'Share on Facebook',
      ariaLabel: 'share on facebook',
      icon: getIcon('SvgFacebook'),
    },
  ];

  return socials.map((social) => (
    <Grid key={social.ariaLabel} item>
      <a href={social.shareUrl + 'https://webdeveloperbeau.com/blog/posts/' + slug} aria-label={social.ariaLabel}>
        <Tooltip title={social.toolTipLabel}>
          <IconButton aria-label={social.ariaLabel}>{social.icon}</IconButton>
        </Tooltip>
      </a>
    </Grid>
  ));
};

export default Share;
