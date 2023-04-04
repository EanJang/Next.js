import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function AboutMe() {
    return (
        <Layout>
            <Head>
                <title>About Me</title>
            </Head>
            <h1>About Me</h1>
            <h3>Klaude Jang</h3>
            <p>Frontend developer and CS student</p>
        </Layout>
    );
}