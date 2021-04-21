import React, {useState} from 'react'
import { connect } from 'react-redux';
import './home.css';
import TaskForm from '../../Components/TaskForm';


function Home({tasks}) {
    return (
        <>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 150 }}>
                <TaskForm/>
            </div>
            <section className="site-layout-background" style={{ padding: 24, minHeight: 150, marginTop:40 }}>
                <div style={{flex:1, display:'flex', flexDirection:'column'}}>
                    {tasks.map((e, index)=>(
                        <div style={{backgroundColor: index%2 ? '#ddd4':'#4fa4', padding:5, marginTop:5}} key={index}>
                            {e.title}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

function mapStateToProps(state) {
    const { tasks } = state.tasksReducer
    return { tasks }
}

export default connect(mapStateToProps)(Home)