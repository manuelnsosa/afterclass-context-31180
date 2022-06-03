import { useState, createContext } from 'react';

export const ToDoContext = createContext();

const ToDoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const id = todos.length + 1;
    setTodos([...todos, { ...todo, id }]);
  };

  const removeTodo = (id) => {
    const copyTodos = [...todos];
    const newTodosArray = copyTodos.filter((todo) => todo.id !== id);
    setTodos(newTodosArray);
  };

  const getAmountOfTodos = () => {
    return todos.length;
  };

  const updateTodoStatus = (id, newStatus) => {
    const copyTodos = [...todos];
    const newTodosArray = copyTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: newStatus,
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodosArray);
  };

  return (
    <ToDoContext.Provider
      value={{ todos, addTodo, removeTodo, getAmountOfTodos, updateTodoStatus }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoContextProvider;
