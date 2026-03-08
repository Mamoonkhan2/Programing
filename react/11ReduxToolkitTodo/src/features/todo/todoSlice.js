import { createSlice, current, nanoid } from "@reduxjs/toolkit"

const initialState = {
  id: "hello",
  todos: 
    [
        { id: "1", text: "Learn Redux Toolkit", completed: false },
        { id: "2", text: "Learn Redux how", completed: false },
    ],
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        
        addTodos: (state,action)=>{
            const {text} = action.payload;
            state.todos.push({id:nanoid(),text});
        },
        removeTodos:(state,action)=>{
            state.todos = state.todos.filter((todo)=>(todo.id != action.payload))
        },
     toggleCompleted: (state, action) => {
        const todo = state.todos.find(todo => todo.id === action.payload);

        if (todo) {
            todo.completed = !todo.completed;
            console.log("Current todo state:", current(todo));
        }
    },
    updateTodo:(state,action) =>{
            const {id,text} = action.payload;
            const todo = state.todos.find(todo => todo.id === id);

            if (todo) {
                todo.text = text;
                console.log("Current todo state:", current(todo));  
        }
    }
}})

const {addTodos,removeTodos,toggleCompleted,updateTodo} = todoSlice.actions

export default todoSlice.reducer
export  {addTodos,removeTodos,toggleCompleted,updateTodo}