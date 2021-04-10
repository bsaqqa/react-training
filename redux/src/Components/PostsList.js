import React,{useContext,useState} from 'react';
import Post from './Post.js';
import store from '../redux/store';


// function useForceUpdate(){
//     const [value, setValue] = useState(0); // integer state
//     return () => setValue(value => value + 1); // update the state to force render
// }


export default function PostsList() {
    // const forceUpdate = useForceUpdate();

    // const unsubscribe = store.subscribe(() =>{
    //     posts = store.getState().postsContainer.posts || [];
    //     console.log('State after dispatch: ', posts)
    //     forceUpdate();
    // })
    // const store = useContext('store');
    let {posts} = store.getState() || [];
    store.subscribe(()=>{
        console.log('store updated', store.getState);
    });
    return (
        <div>
            <ul>
                {posts.map(post =>(
                    <Post key={post.id} data={post}/>
                ))}
            </ul>
        </div>
    );
}
