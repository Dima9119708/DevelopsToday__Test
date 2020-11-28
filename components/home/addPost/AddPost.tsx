import React from 'react';
import { Button, Wrap } from './addPost.styles';
import Link from 'next/link';

export const AddPost = () => {
    return (
        <Wrap className="wrap">
            <Link href="/posts/new">
                <Button>Добавить статью</Button>
            </Link>
        </Wrap>
    );
};
