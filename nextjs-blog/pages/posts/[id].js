import Layout from '../../components/layout';

export default function Post() {
    return <Layout>...</Layout>;
}

export async function getStaticPaths() {
    // will return a list of possible values for id
}

export async function getStaticProps({params}) {
    // will fetch necessary data for the post using params.id
}