import React from 'react';
import { Link } from "react-router-dom";
  
  
import Routers from '../router';

export default function Nav() {
  return (
    <ul className='nav-list'>
        {Routers.map((e,index)=>{
            if(e.hidden === true ){
                return null;
            }
            return (<li key={'nav-'+index}>
                        <Link to={e.link}>{e.name}</Link>
                    </li>);
        })}
    </ul>
  );
}
