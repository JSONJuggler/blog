import Image from 'next/image';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

type CoverImageProps = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage: React.FC<CoverImageProps> = ({ title, src, slug }) => {
  const classes = useStyles();

  const image = (
    <Image src={src} alt={`Cover Image for ${title}`} className={classes.image} height={960} width={1920} />
  );

  return (
    <>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
};

const useStyles = makeStyles(() => ({
  image: {},
}));

export default CoverImage;
