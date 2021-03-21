import {useEffect, useState} from 'react';

var inter = null;
const Clock = ()=>{
    const [date, setDate] = useState(new Date());

    useEffect(()=>{ // component did mount
        inter = setInterval(()=> {
            setDate(new Date())
        }, 1000);
    },[]);
    useEffect(()=>{ // Component will unmount
        return ()=>{
            clearInterval(inter);  
        }
    },[]);


    return (
        <div>
            <h1>Functional!</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Clock;