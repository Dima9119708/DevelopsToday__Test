import React from "react";
import Head from "next/head";
import {Header} from "../../components/home/header/Header";
import { PostItem } from "../../components/post/PostItem";

export default function Post() {
    return (
        <>
            <Head>
                <title>Пост</title>
            </Head>

            <Header />

            <PostItem />
        </>
    )
}