import React, {useState} from 'react'
import { Input } from 'antd';

import './home.css';
const { Search } = Input;


export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    
    const handle = e=>{
        let myTasks = tasks;
        let task = e.trim();
        if(task.length > 0){
            myTasks.push(task)
            setTasks(myTasks)
        }

        setInput('');
    }

    const handleChange = e=>{
        setInput(e.target.value);
    }
    return (
        <>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 150 }}>
                <div className="form" >
                    <Search
                        value={input}
                        onChange={handleChange}
                        className="add-input"
                        placeholder="Add your tasks"
                        allowClear
                        enterButton="Add"
                        size="large"
                        onSearch={handle}
                        />
                </div>
               
            </div>
            <section className="site-layout-background" style={{ padding: 24, minHeight: 150, marginTop:40 }}>
                <div style={{flex:1, display:'flex', flexDirection:'column'}}>
                    {tasks.map((e, index)=>(
                        <div style={{backgroundColor: index%2 ? '#ddd4':'#4fa4', padding:5, marginTop:5}} key={index}>
                            {e}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
