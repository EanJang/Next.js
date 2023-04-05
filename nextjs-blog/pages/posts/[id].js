import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({postData}) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br />
            <br />
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        </Layout>
    );
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
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}