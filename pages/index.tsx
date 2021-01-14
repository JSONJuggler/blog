import { makeStyles } from '@material-ui/core';
import Head from 'next/head';

type HomeProps = {
  isDark: boolean;
};

const Home: React.FC<HomeProps> = ({ isDark }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>Beau Reescano | Fullstack dev</title>
        <meta
          name="description"
          content="I'm a Full Stack web developer using the latest front-end and back-end
          technologies with a focus on Typescript, React JS, Next JS, and Node JS."
        />
        <meta name="google-site-verification" content="x0Muns5pK71I3AK6b3XmS8zvBwcMpuSodHaI4MJqr-A" />
      </Head>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
}));

export default Home;
