import React from "react";
import {Body, Comments, Comment, Title, Wrap } from "./post.styles";
import Link from "next/link";
import {Back} from "../newPost/newPost.styles";

export const PostItem = () => {
    return (
      <Wrap className="wrap">

         <Link href="/">
             <Back>Назад</Back>
         </Link>

         <Title>
             saddsasadsadsadasdsadasdsasaddsaadsadsdsaasdd
             dsadsddasdsdadsadsaasddasasdadssadsdadsadsaasd
         </Title>

         <Body>
             saddsasadsadsadasdsadasdsasaddsaadsadsdsaasdd
             dsadsddasdsdadsadsaasddasasdadssadsdadsadsaasd
         </Body>

         <Comments>Комментарии : </Comments>

         <Comment>sadsdadsadasdasadsdas</Comment>
         <Comment>sadsdadsadasdasadsdas</Comment>
         <Comment>sadsdadsadasdasadsdas</Comment>

      </Wrap>
    )
}