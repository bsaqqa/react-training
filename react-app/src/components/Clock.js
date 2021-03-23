import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(), intr: null};
    }

    componentDidMount(){
        this.setState({
            intr: setInterval(()=>{
                this.setState({date:new Date()});
            }, 1000)
        });
    }
  
    componentWillUnmount(){
      clearInterval(this.state.intr);
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}