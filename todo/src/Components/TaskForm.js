
import React, { Component } from 'react'
import {Input} from 'antd';
import store from '../redux/store';
import {addTask} from '../redux/taskActions';

const { Search } = Input;


export default class TaskForm extends Component {
    state = {
        input: '',
        tasks: []
    }
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handle = this.handle.bind(this)
    }

    handleChange (e){
        this.setState({'input': e.target.value});
    }
    handle(e){
        let task = e.trim();
        if(task.length > 0){
            addTask(task)
        }
        this.setState({input: ''});
    }
    render() {
        return (
            <>
            <div className="form" >
                <Search
                    value={this.state.input}
                    onChange={this.handleChange}
                    className="add-input"
                    placeholder="Add your tasks"
                    allowClear
                    enterButton="Add"
                    size="large"
                    onSearch={this.handle}
                    />
            </div>
        </>
        )
    }
}
