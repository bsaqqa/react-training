import store from './store';


export const addTask = ( title, dispatch = store.dispatch) =>{
    dispatch({type: 'ADD_TASK', payload: {title}})
}