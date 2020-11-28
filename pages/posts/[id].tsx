import React from 'react';
import Head from 'next/head';
import { Header } from '../../components/home/header/Header';
import { PostInterface, PostItem } from '../../components/post/PostItem';
import axios from 'axios';

interface Props {
    data: PostInterface;
}

export default function Post({ data }: Props) {
    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>

            <Header />

            <PostItem {...data} />
        </>
    );
}

export async function getServerSideProps({ query }) {
    const { data } = await axios.get(`https://simple-blog-api.crew.red/posts/${query.id}?_embed=comments`);

    return {
        props: { data },
    };
}
