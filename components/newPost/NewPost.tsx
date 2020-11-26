import React from "react";
import {Back, ButtonSubmit, Input, Label, TextArea, Wrap } from "./newPost.styles";
import Link from "next/link";

export const NewPost = () => {

    return (
        <Wrap className="wrap">
            <Link href="/">
                <Back>Назад</Back>
            </Link>
            <form>
                <Label htmlFor="Заголовок">Заголовок</Label>
                <Input id="Заголовок"/>

                <Label htmlFor="Описание">Описание</Label>
                <TextArea id="Описание"/>

                <ButtonSubmit type="submit">Добавить</ButtonSubmit>
            </form>
        </Wrap>
    )
}