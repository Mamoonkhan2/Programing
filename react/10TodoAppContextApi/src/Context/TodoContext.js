import React from 'react';
export const TodoContext = React.createContext({
    todos: [
        {
            id: 1,
            todo: "Learn React Context API",
            completed: false,
        }
    ],
    addTodo: (id,todo) => { },
    deleteTodo: (id) => { },
    toggleCompleted: (id) => { },
    updateTodoMsg: (id,newMsg) => { },
});

export const TodoProvider = TodoContext.Provider

export const useTodo = () => React.useContext(TodoContext);