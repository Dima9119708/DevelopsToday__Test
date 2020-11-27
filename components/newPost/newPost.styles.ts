import styled from 'styled-components'

export const Wrap = styled.div`
    padding: 50px 0;
    color: #fff;
`

export const Back = styled.button`
    padding: 10px 30px;
    font-size: 20px;
    border: 0;
    border-radius: 5px;
    background-color: #9f162d;
    color: #fff;
    cursor: pointer;
    outline: none;
    margin-bottom: 30px;
    
    &:hover {
      background-color: #dc3951;
    }
`

export const Label = styled.label`
    display: block;
    font-size: 25px;
    color: #fff;
    margin-bottom: 10px;
`

export const Input = styled.input`
    font-family: 'Poppins', sans-serif;
    width: 100%;
    font-size: 20px;
    outline: none;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 30px;
`

export const TextArea = styled.textarea`
    font-family: 'Poppins', sans-serif;
    width: 100%;
    padding: 10px;
    font-size: 20px;
    resize: vertical;
    min-height: 200px;
    border-radius: 5px;
    outline: none;
    margin-bottom: 25px;
`

export const ButtonSubmit = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    background-color: #26a8ed;
    border: 0;
    border-radius: 5px;
    color: #fff;
    outline: none;
    
    &:hover {
      background-color: #29b2f0;
    }
`

export const PostSuccess = styled.div`
    padding: 10px 0;
    background-color: green;
    text-align: center;
    color: #ffffff;
    margin-bottom: 20px;
    border-radius: 5px;
`