import React from 'react';

function TodoList() {
    function addTodoItem(e) {
        console.log('hi');
    }

    return (
    <div className="TodoList">
    <form onSubmit={addTodoItem}>
        <input type="text">
        </input>
        <button type="submit">Add</button>
    </form>
    </div>
    );
}
export default TodoList;