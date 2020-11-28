import React from "react";
import {Body, Comments, Comment, Title, Wrap } from "./postItem.styles";
import Link from "next/link";
import {Back} from "../newPost/newPost.styles";
import { CommentCreate } from "./CommentCreate";

interface Comment {
    body : string
}

export interface PostInterface {
    title : string
    body : string
    comments : Array<Comment>
}

export const PostItem = ( { title, body, comments } : PostInterface ) => {

    return (
      <Wrap className="wrap" key={title}>

         <Link href="/">
             <Back>Назад</Back>
         </Link>

         <Title>
             {title}
         </Title>

         <Body>
             { body }
         </Body>

         <CommentCreate />

         <Comments> Комментарии : </Comments>

         { !comments.length && <Comment>
                                        К сожалению еще нет
                                        комментариев по данной статье
                               </Comment> }

         { comments.map( (item,index) => {
            return <Comment key={item.body + index}>{ item.body }</Comment>
         })}

      </Wrap>
    )
}