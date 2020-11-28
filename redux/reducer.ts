import { LOAD } from './contants';

interface Action {
    type: string;
    payload: boolean;
}

const initialState = {
    postLoad: false,
};

export type stateType = typeof initialState;

export const appReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                postLoad: action.payload,
            };

        default:
            return { ...state };
    }
};
