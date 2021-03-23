import { useState, useEffect } from 'react';


var myName = "Baraa";
export default function NewApp() {
    const [name, setName] = useState('Ahmed');
    useEffect(()=>{
        setName('Khaled')
    },[]);
    myName = "Ali";
    console.log(name);
    return (
        <div>
            <h1>Hello {name}, {myName}</h1>
        </div>
    );
}
