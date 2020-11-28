import React from 'react';
import Head from 'next/head';
import { Header } from '../components/home/header/Header';
import { Articles } from '../components/home/articles/Articles';
import { AddPost } from '../components/home/addPost/AddPost';
import axios from 'axios';

export default function Home({ data }) {
    return (
        <>
            <Head>
                <title>Блог</title>
            </Head>

            <Header />

            <AddPost />

            <Articles posts={data} />
        </>
    );
}

export async function getServerSideProps() {
    const { data } = await axios.get('https://simple-blog-api.crew.red/posts');

    return {
        props: { data },
    };
}
