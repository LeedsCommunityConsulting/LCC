import styles from '../styles/Error.module.scss';
import Head from 'next/head';
import Link from 'next/link';

export default function Error404() {
  return (
    <div className={styles.Error}>
      <Head>
        <title>404 Page Not Found</title>
      </Head>
      <div className={styles.wrapper}>
        <h1 className={styles.banner}>404</h1>
        <span className={styles.message}>
          The page you have requested was not found. Click here to go{' '}
          <Link className="lcc-link" href="/">
            home
          </Link>
        </span>
      </div>
    </div>
  );
}
