import { LOAD } from "./contants"
import axios from "axios";


interface LOAD_POST_TYPE {
    type : typeof LOAD,
    payload : boolean
}

export const LOAD_POST = (load : boolean) : LOAD_POST_TYPE => {
    return {
        type : LOAD,
        payload : load
    }
}


export const POST_DATA = (title : string, body : string, divSuccess : HTMLDivElement) => {

    return dispatch => {

        axios.post(
            'https://simple-blog-api.crew.red/posts',
                { title, body }
            )
            .then(e => {
                divSuccess.style.display = 'block'
                dispatch(LOAD_POST(false))
            })
            .catch(err => console.log(err))
    }

}

export const POST_DATA_COMMENT = (body : string, postId : string | string[]) => {

    return dispatch => {

        axios.post(
            'https://simple-blog-api.crew.red/comments',
            {
                postId,
                body
            }
        )
            .then(res => {
                console.log(res)
                //window.location.reload()
            })
            .catch(err => console.log(err))
    }

}