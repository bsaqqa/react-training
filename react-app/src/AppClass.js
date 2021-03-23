import React from 'react';
import Clock from './components/Clock';
import ClockFunctional from './components/ClockFunctional';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Mohmmed"
    };
  }
  componentWillMount(){
    this.setState({name: 'ahmed'});
  }
  componentDidMount(){
    this.setState({name: 'Ali'});
  }

  render() {
    return (
      <div>
        {/* <h1>Hello {this.state.name}</h1> */}
        {/* <Clock/> */}
        <ClockFunctional/>
      </div>
    );
  }
}