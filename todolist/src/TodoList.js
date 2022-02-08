import React from 'react';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state={todolist:[]};

        this.addTodoItem = this.addTodoItem.bind(this);
        this.removeTodoItem = this.removeTodoItem.bind(this);
    }
    
    addTodoItem() {
        var todolist = [...this.state.todolist]
        todolist.push(this.newItem.value);
        this.setState({todolist});
    }

    removeTodoItem(item) {
        const list = this.state.todolist;

        list.splice(item, 1);
        this.setState({ list });
    }

    render() {
        return(
                <div>
                    <input type="text" ref={(item) => {this.newItem = item}}/>
                    <button className="TodolistButton" onClick={this.addTodoItem}>Add</button>
                    <ul className="Todolist">
                        {this.state.todolist.map((x,y) => {
                            return <li key={y}>{x}
                            <button className="TodolistButton" onClick={this.removeTodoItem}>Remove</button>
                            </li>})}
                    </ul>
                </div>
        )
    }
}
export default TodoList;