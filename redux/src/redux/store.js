import { createStore } from 'redux';
import postReducer from './reducers/postReducer'

const initialState = {
    posts: []
};
function rootReducer(state = initialState, action) {
    // always return a new object for the root state
    return {
      // the value of `state.todos` is whatever the todos reducer returns
      posts: postReducer(state.posts, action),
    };
}

const store = createStore(rootReducer);

export default store;