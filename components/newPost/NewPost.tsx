import React from 'react';
import { Back, Input, ButtonSubmit, Label, TextArea, Wrap, PostSuccess } from './newPost.styles';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { stateType } from '../../redux/reducer';
import { LOAD_POST, POST_DATA } from '../../redux/actions';

export const NewPost = () => {
    const $title = React.useRef<HTMLInputElement>(null);
    const $dist = React.useRef<HTMLTextAreaElement>(null);
    const [success, setSuccess] = React.useState(false);
    const postLoad = useSelector(({ postLoad }: stateType) => postLoad);
    const dispatch = useDispatch();

    const titleInputHandle = () => {
        const title = $title.current!;
        title.style.border = 'none';
    };

    const distInputHandle = () => {
        const dist = $dist.current!;
        dist.style.border = 'none';
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const title = $title.current!;
        const dist = $dist.current!;

        const titleValue = title.value;
        const distValue = dist.value;

        if (!titleValue || titleValue.length < 10) title.style.border = '2px solid red';
        if (!distValue || distValue.length < 10) dist.style.border = '2px solid red';

        if (titleValue.length > 10 && distValue.length > 10 && !postLoad) {
            dispatch(LOAD_POST(true));
            dispatch(POST_DATA(titleValue, distValue, setSuccess));
        }
    };

    return (
        <Wrap className="wrap">
            <Link href="/">
                <Back>Назад</Back>
            </Link>

            <PostSuccess style={{ display: success ? 'block' : 'none' }}>Данные успешно отправлены!</PostSuccess>

            <form>
                <Label htmlFor="Заголовок">Заголовок</Label>
                <Input onInput={titleInputHandle} ref={$title} id="Заголовок" />

                <Label htmlFor="Описание">Описание</Label>
                <TextArea onInput={distInputHandle} ref={$dist} id="Описание" />

                <ButtonSubmit
                    onClick={handleSubmit}
                    type="submit"
                    style={{
                        opacity: !postLoad ? 1 : 0.5,
                        transition: 'opacity 0.5s ease',
                    }}
                >
                    Добавить
                </ButtonSubmit>
            </form>
        </Wrap>
    );
};
