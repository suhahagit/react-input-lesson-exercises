import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    handleInput = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    alertMsg = () => {
        alert(`Come on ${this.state.name}, you are ${this.state.age} - that is good enough`)
    }

    render() {
        return (
            <div>
                <input id="name-input" name = "name" value = {this.state.name} onChange = {this.handleInput}/>
                <input id="age-input" name = "age" value = {this.state.age} onChange = {this.handleInput}/>
                <button onClick = {this.alertMsg}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;