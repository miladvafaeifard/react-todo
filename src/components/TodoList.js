import React, { Component } from 'react';

class TodoList extends Component {
    count = 1;
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            todos: []
        };
    }

    Add() {
        const name = this.textInput.current.value;
        this.setState({
            todos: [...this.state.todos, {id: this.count++, name, completed: false}]
        });
    }

    render() {
        return (
            <div>
                <input ref={this.textInput} placeholder="What is your mind saying?"/>
                <button onClick={() => this.Add()}>ADD</button>
                <ul>
                    {this.state.todos.map(({id, name}) => <li key={id}>{name} </li>)}
                </ul>
            </div>
        );
    }
}

export default TodoList;