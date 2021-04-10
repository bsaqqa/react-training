import store from '../store';
import {
    POST_GENERATE,
    CHECK_POST
} from '../reducers/postReducer';


export const generate = ()=>{
    store.dispatch({type: POST_GENERATE});
}


export const checkPost = id=>{
    store.dispatch({type: CHECK_POST, payload:id});
}
