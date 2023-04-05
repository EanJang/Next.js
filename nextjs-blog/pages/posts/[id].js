import Layout from '../../components/layout';
import { getAllPostIds } from '../../lib/posts';

export default function Post() {
    return <Layout>...</Layout>;
}

export async function getStaticPaths() {
    // will return a list of possible values for id
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    // will fetch necessary data for the post using params.id
}