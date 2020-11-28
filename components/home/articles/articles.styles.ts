import styled from 'styled-components';

export const Wrapper = styled.main`
    display: flex;
    flex-wrap: wrap;
    padding: 40px 0;
    color: #fff;
`;

export const ArticleTitle = styled.h2`
    color: hsla(0, 0%, 100%, 0.85);
    margin-bottom: 15px;
    font-size: 22px;
    line-height: 1.4;
`;

export const Article = styled.article`
    padding: 10px;
    width: 100%;
    cursor: pointer;
    margin-bottom: 20px;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
        width: 50%;
    }

    @media (min-width: 1140px) {
        width: 30%;
        margin-right: 40px;
        margin-bottom: 20px;
    }

    &:nth-child(3n) {
        margin-right: 0;
    }

    &:hover ${ArticleTitle} {
        color: #27d4e4;
        transition: color 0.2s linear;
    }
`;

export const ArticleBody = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #92a3ab;
    font-size: 15px;
    max-width: 400px;
    margin: 0 auto;

    @media (min-width: 768px) {
        margin: 0;
    }

    @media (min-width: 1140px) {
        max-width: 400px;
    }
`;
