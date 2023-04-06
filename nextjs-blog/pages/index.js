import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
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
          </a>
          <a href="https://medium.com/@LauJang" className={styles.card}>
            <h3>Blog &rarr;</h3>
          </a>
          <Link
            href="/posts/about-me"
            className={styles.card}
          >
            <h3>About Me &rarr;</h3>
          </Link>
          <a
            href="/posts/contact-me"
            className={styles.card}
          >
            <h3>Contact Me &rarr;</h3>
          </a>
    </div>

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
  </Layout>
  )
}
