import React, {useState} from 'react';
// import PostsList from '../Components/PostsList';
import PostsList from '../Components/PostsListClass';
// import store from '../redux/store';
import { generate } from '../redux/actions/PostActions'; 


export default function Home(props,{store}) {
  
  // const state = store.getState();

  console.log(store);
  // const [posts, setPosts] = useState([]);
  function regenratePosts(){
    generate();
  }

  // function regenratePosts(){
  //   setPosts([
  //     {
  //       id:Math.floor(Math.random()*10),
  //       title: 'New Post 1',
  //       isChecked: false,
  //       check: ()=>{
  //         setPosts(()=>{
  //           // implemetn this funciton 
  //         });
  //       }
  //     },
  //     {
  //       id:Math.floor(Math.random()*10) +1,
  //       title: 'New Post 2',
  //       isChecked: false,
  //       check: ()=>{
  //         setPosts(()=>{
  //           // implemetn this funciton 
  //         });
  //       }
  //     }
  //   ]);
  // }

  return (
    <>
        <h1>Home</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Corrupti, praesentium! Et vel assumenda sint blanditiis beatae perferendis. 
            Labore tenetur ipsa magnam laudantium est voluptatibus, amet fugiat, 
            explicabo autem eligendi laborum.
        </p>
        <button onClick={()=>regenratePosts()}>Regenerate</button>
        <PostsList />
    </>
  );
}
