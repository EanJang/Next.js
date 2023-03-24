import Link from 'next/link';
import Head from 'next/head';

export default function AboutMe() {
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>
            <h1>About Me</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}