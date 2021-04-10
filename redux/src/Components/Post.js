import React from 'react';
import {checkPost} from '../redux/actions/PostActions';

export default function Post({data}) {
    return (
        <li>
            <p>ID: {data.id},</p>
            <p>Title: {data.title},</p>
            <p>{data.checked? "Checked": "UnChecked"}</p>
            <button onClick={()=>checkPost(data.id)}>Check</button>
        </li>
    );
}
