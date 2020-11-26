import React from "react";
import {Button, Wrap } from "./addPost.styles";
import Link from 'next/link'


export const AddPost = () => {
    return (
        <Wrap className="wrap">
           <Link href='/new'>
               <Button>Добавить статью</Button>
           </Link>
        </Wrap>
    )
}