import {createStore, combineReducers} from 'redux';

import tasksReducer from "./tasksReducer";
// import userReducer from "./userReducer";

// function rootReducer(state, action){
//     return (state, action)=>{
//         tasksReducer: tasksReducer(state, action)
//         // userReducer: userReducer(state, action),
//     }
// }

const rootReducer = combineReducers({
    tasksReducer
});

export default createStore(rootReducer);