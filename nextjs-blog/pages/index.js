import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (

    <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>This is my personal blog, made with Next.js as a practice</p>

    </section>
    <div className={styles.grid}>
          <a href="https://github.com/LauJang" className={styles.card}>
            <h3>GitHub &rarr;</h3>
            <p>Please visit my Github to see what I'm currently working on!</p>
          </a>

          <a href="https://medium.com/@LauJang" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>I try to backup what I learned on my blog.</p>
          </a>

          <Link
            href="/posts/about-me"
            className={styles.card}
          >
            <h3>About Me &rarr;</h3>
            <p>In case you want to know more about me...</p>
          </Link>

          <a
            href="/posts/contact-me"
            className={styles.card}
          >
            <h3>Contact Me &rarr;</h3>
            <p>
              Send me a message! Tell me what ever you'd like:)
            </p>
          </a>
        </div>
  </Layout>
  )
}
