import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
        <h1>About</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Corrupti, praesentium! Et vel assumenda sint blanditiis beatae perferendis. 
            Labore tenetur ipsa magnam laudantium est voluptatibus, amet fugiat, 
            explicabo autem eligendi laborum.
        </p>

        <Link to="/about/4">Company Information</Link>
    </>
  );
}
