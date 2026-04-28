import React, { Component } from 'react';
import { Form, Button, Table, Container, Row, Col } from 'react-bootstrap';
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: {}
        };
    }
    
    addTodo() {
        this.setState({
            todos: {...this.state.todos, [this.todoInput.value]: false}
        });
        this.todoInput.value = '';
    }
    
    deleteTodo(todo) {
        this.setState({
            todos: Object.fromEntries(Object.entries(this.state.todos).filter(([key]) => key !== todo))
        });
    }
    
    render() {
        return (
            <Container>
                <h1>Todo App</h1>
                <Row className="mb-3">
                    <Col>
                        <Form.Group className="d-flex gap-2">
                            <Form.Control type="text" placeholder="Add new todo..." ref={(input) => this.todoInput = input} />
                            <Button variant="primary" onClick={() => this.addTodo(this.todoInput.value)}>ADD</Button>
                        </Form.Group>
                    </Col>
                </Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Todo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(this.state.todos).map(([todo, completed]) => (
                            <tr key={todo} className={completed ? 'table-success' : ''}>
                                <td>{todo}</td>
                                <td>
                                    <Button variant="success" className="me-2" onClick={() => this.setState({ todos: { ...this.state.todos, [todo]: !completed } })}>Mark as completed</Button>
                                    <Button variant="danger" onClick={() => this.deleteTodo(todo)}>DELETE</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        );
    }
}
export default TodoApp;