import React from 'react';
import Head from 'next/head';
import { Header } from '../../components/home/header/Header';
import { NewPost } from '../../components/newPost/NewPost';

export default function AddNewPost() {
    return (
        <>
            <Head>
                <title>Новая статья</title>
            </Head>

            <Header />

            <NewPost />
        </>
    );
}
