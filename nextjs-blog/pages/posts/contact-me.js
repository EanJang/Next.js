import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function ContactMe() {
    return (
        <Layout>
            <Head>
                <title>Contact Me</title>
            </Head>
            <h1>Contact Me</h1>
            <h3>Email</h3>
            <p>klaude.jang@gmail.com</p>
        </Layout>
    );
}