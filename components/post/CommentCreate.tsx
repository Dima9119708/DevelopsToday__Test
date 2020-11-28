import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { POST_DATA_COMMENT } from '../../redux/actions';

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 100px;
    font-size: 18px;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    resize: vertical;
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
`;

export const ButtonSubmit = styled.button`
    border: 0;
    outline: 0;
    cursor: pointer;
    display: inline-block;
    padding: 12px 30px;
    font-size: 18px;
    border-radius: 5px;
    margin-bottom: 30px;
    background-color: #26a8ed;
    color: #fff;
`;

export const CommentCreate = () => {
    const $textArea = React.useRef<HTMLInputElement>(null);
    const router = useRouter();
    const dispatch = useDispatch();

    const handleInput = () => {
        const textArea = $textArea.current!;
        textArea.style.border = 'none';
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const textArea = $textArea.current!;

        const { value } = textArea;

        if (!value || value.length < 10) textArea.style.border = '2px solid red';

        if (value && value.length > 10) {
            const postID = router.query.id;
            dispatch(POST_DATA_COMMENT(value, postID));
        }
    };

    return (
        <>
            <TextArea ref={$textArea} onInput={handleInput} />
            <ButtonSubmit onClick={handleSubmit} type="submit">
                Отправить
            </ButtonSubmit>
        </>
    );
};
