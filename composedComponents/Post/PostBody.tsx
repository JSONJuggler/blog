import { Container } from '@material-ui/core';

type PostBodyProps = {
  content: string;
  excerpt: string;
};

const PostBody: React.FC<PostBodyProps> = ({ content, excerpt }) => {
  return (
    <Container maxWidth="sm" disableGutters>
      <div
        className="MuiTypography-root MuiTypography-body2 MuiTypography-paragraph MuiTypography-colorTextSecondary MuiTypography-alignCenter"
        dangerouslySetInnerHTML={{ __html: '<em>' + excerpt + '</em>' }}
      />
      <div className="MuiTypography-root MuiTypography-body1" dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
};

export default PostBody;
