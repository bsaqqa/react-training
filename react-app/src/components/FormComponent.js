import React from "react";

export default class FormComponent extends React.Component{
    state= {
        name: ''
    }
    handleChanges = e=> this.setState({name: e.target.value});
    
    render(){
        return(
            <div>
                <h1>Form</h1>
                <form>
                    <label>Name:</label>
                    <input onChange={this.handleChanges}
                         value={this.state.name} 
                         placeholder="Enter your name" />
                    <button type="submit"
                        onClick={this.handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Click ");
    }
}