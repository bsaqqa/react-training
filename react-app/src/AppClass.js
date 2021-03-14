import React from 'react';

export default class App extends React.Component {
  getName(){
    return "Mohammed";
  }
  render() {
    return (
      <div>
        <h1>Hello {this.getName()}</h1>
      </div>
    );
  }
}