import React, { Component } from 'react';
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }
    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <div className="d-flex gap-2 justify-content-between">
                    <input type="text" className="form-control" />
                    <button className="btn btn-primary">ADD</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Todo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((todo, index) => (
                            <tr key={index}>
                                <td>{todo}</td>
                                <td>
                                    <button className="btn btn-danger">DELETE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default TodoApp;