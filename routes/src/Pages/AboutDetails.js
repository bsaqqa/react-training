import React from 'react';
import {useParams, Link, useHistory} from "react-router-dom";


const details = [
  {
    id: 2,
    title: 'Title 2',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corrupti, praesentium! Et vel assumenda sint blanditiis beatae perferendis.`
  },
  {
    id: 3,
    title: 'Title 3',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corrupti, praesentium! Et vel assumenda sint blanditiis beatae perferendis.`
  },
  {
    id: 4,
    title: 'Title 4',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corrupti, praesentium! Et vel assumenda sint blanditiis beatae perferendis.`
  }
];

export default function AboutDetails() {
  const history = useHistory();
  let {id} = useParams();
  console.log(id, window.location);

  // const myParams= new URLSearchParams(window.location.);
  // call api 
  var post = details.filter(e=> e.id == id)[0];

  if(post === undefined){
    //redirect page not found
    // return (<h1>Page not found</h1>);
    // window.location.href = "/error";
    history.push('/error');
  }

  return (
    <>
        <h1>About Details: {post.title}</h1>
        <p>
          {post.description}
        </p>

        <Link to="/about">Go Back</Link>
    </>
  );
}
