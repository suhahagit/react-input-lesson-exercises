import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}

handleInput = e => {
    const {name, value} = e.target
    this.setState({
        [name]: value}, () => {
            console.log(`${this.state.name} selected ${this.state.fruit}`)
        })
}

render() {
    return (
        <div>
            <input id="name-input" name = 'name' value = {this.state.name} onChange = {this.handleInput}/>
            <select name = "fruit" id="select-input" onChange = {this.handleInput} value = {this.state.fruit}>
                <option value = "apple">Apple</option>
                <option value = "melon">Melon</option>
                <option value = "tomato">Tomato</option>
            </select>
        </div>
    );
}
}

export default Exercise2;