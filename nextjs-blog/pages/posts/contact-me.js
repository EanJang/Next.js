import Link from 'next/link';
import Head from 'next/head';

export default function ContactMe() {
    return (
        <>
            <Head>
                <title>Contact Me</title>
            </Head>
            <h1>Contact Me</h1>
            <h3>Email</h3>
            <p>klaude.jang@gmail.com</p>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}