import Link from "next/link";
import React from "react";
import {Article, ArticleBody, ArticleTitle, Wrapper } from "./articles.styles";

export const Articles = () => {
    return (
        <Wrapper className="wrap">

            <Link href="post/5454">
                <Article>
                    <ArticleTitle>Sunt aut facere repellat provident occaecati </ArticleTitle>
                    <ArticleBody>
                        Quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit
                        molestiae ut ut quas totam nostrum rerum est autem sunt rem
                        eveniet architecto
                    </ArticleBody>
                </Article>
            </Link>

            <Link href="post/2">
                <Article>
                    <ArticleTitle>Sunt aut facere repellat provident occaecati </ArticleTitle>
                    <ArticleBody>
                        Quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit
                        molestiae ut ut quas totam nostrum rerum est autem sunt rem
                        eveniet architecto
                    </ArticleBody>
                </Article>
            </Link>

            <Link href="post/1">
                <Article>
                    <ArticleTitle>Sunt aut facere repellat provident occaecati </ArticleTitle>
                    <ArticleBody>
                        Quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit
                        molestiae ut ut quas totam nostrum rerum est autem sunt rem
                        eveniet architecto
                    </ArticleBody>
                </Article>
            </Link>

            <Link href="post/3">
                <Article>
                    <ArticleTitle>Sunt aut facere repellat provident occaecati </ArticleTitle>
                    <ArticleBody>
                        Quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit
                        molestiae ut ut quas totam nostrum rerum est autem sunt rem
                        eveniet architecto
                    </ArticleBody>
                </Article>
            </Link>

        </Wrapper>
    )
}

