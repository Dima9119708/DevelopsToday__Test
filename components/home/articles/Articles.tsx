import Link from "next/link";
import React from "react";
import {Article, ArticleBody, ArticleTitle, Wrapper } from "./articles.styles";

interface Post {
    title : string
    body : string
    id : number | string
}

interface Props {
    posts : Array<Post>
}

export const Articles = ( { posts } : Props ) => {

    return (
        <Wrapper className="wrap">

            { posts.filter(item => item.title && item.body)
                   .map(item => {
                        return (
                            <Link href={`posts/${item.id}`} key={item.id}>
                                <Article >
                                    <ArticleTitle> { item.title } </ArticleTitle>
                                    <ArticleBody>
                                        { item.body }
                                    </ArticleBody>
                                </Article>
                            </Link>
                        )
            }) }

        </Wrapper>
    )
}


