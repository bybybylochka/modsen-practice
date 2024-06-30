import {v4} from "uuid";
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  border-radius: 20px;
  background-color: bisque;
`;

const Title = styled.h1`
  color: chocolate;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid peru;
  border-radius: 4px;
  margin-right: 10px;
  background-color: transparent;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: peru;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const List = styled.ul`
  list-style-type: circle;
`;

const TodoItem = styled.li`
  padding: 15px;
  border-bottom: 2px solid peru;
`;

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            const newTodoItem = { id: v4(), text: newTodo.trim() };
            setTodos([...todos, newTodoItem]);
            setNewTodo('');
        }
    };

    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <Container>
            <Title>Todo List</Title>
            <InputContainer>
                <Input
                    type="text"
                    placeholder="Enter a new todo"
                    value={newTodo}
                    onChange={handleInputChange}
                />
                <Button onClick={addTodo}>Add</Button>
            </InputContainer>
            <List>
                {todos.map((todo) => (
                    <TodoItem key={todo.id}>{todo.text}</TodoItem>
                ))}
            </List>
        </Container>
    );
};

export default TodoList;