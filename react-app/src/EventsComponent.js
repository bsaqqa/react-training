import React from "react";

export default class EventsComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articals: [],
            counter: 0
        };
    }
    clickMe() {
        let {articals, counter} = this.state;
        articals.push(++counter);
        this.setState({
            counter,
            articals
        });
    }
    render() {
        const {articals , counter} = this.state;
        return (
            <div>
                <h1>Events</h1>
                <h3>{counter}</h3>
                {articals.length>0 && <ul>
                    {articals.map((e) =>{
                        return <li key={e}>{e}</li>
                    })}
                </ul>}

                <button onClick={()=>this.clickMe()}>Click Me</button>
            </div>
        )
    }
}
