import Head from 'next/head';

import { makeStyles } from '@material-ui/core';
import { GetStaticProps } from 'next';
import { NotFound } from '../composedComponents/Error';

const NotFoundPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>Not Found | blog | developer</title>
      </Head>
      <NotFound />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
  },
}));

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default NotFoundPage;
