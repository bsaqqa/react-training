import React, { Component } from 'react'
import '../assets/main.css';
export default class HttpRequestComponent extends Component {
    state = {
        isLoading: true,
        posts: [],
        error: null
    }
    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res=>res.json())
            .then(response=>{
                // response.json().then(e=>console.log(e))
                this.setState({posts: response});
            }).catch(error=>{
                this.setState({error: error.message});
            }).finally(()=>{
                this.setState({isLoading: false});
            });
    }

    render() {
        const {posts,isLoading, error}  = this.state;
        return (
            <div>
                {isLoading && <p id="loader"> Loading ... </p>}
                {error && <p> There is an error: {error} </p>}

                <ul>
                    {posts && posts.map(e=>
                        <li key={e.id}>
                            <h2>{e.title}</h2>
                            <p>{e.body}</p>
                        </li>
                    )}
                   
                </ul>
            </div>
        )
    }
}
