import React from "react";
import Head from "next/head";
import { Header } from "../components/home/header/Header";
import { Articles } from "../components/home/articles/Articles";
import { AddPost } from "../components/home/addPost/AddPost";

export default function Home() {
  return (
    <>
        <Head>
            <title>Блог</title>
        </Head>

        <Header />

        <AddPost />

        <Articles />
    </>
  )
}
