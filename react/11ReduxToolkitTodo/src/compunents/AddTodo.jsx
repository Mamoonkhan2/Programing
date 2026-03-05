import React, { useState } from "react";
import { addTodos } from '../features/todo/todoSlice'; // Import your action creator
import { useDispatch } from "react-redux";
function AddTodo() {
    const dispatch = useDispatch();

    const [todoMsg, setTodoMsg] = useState(""); 

    return (
        <form  className="flex" onSubmit={(e) => {
            e.preventDefault();
            const newtodo = {
                text: todoMsg,
                completed: false
            };
            // Handle form submission logic here    
            dispatch(addTodos(newtodo)); // Dispatch the action to add a new todo
            setTodoMsg(" ")
        }}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default AddTodo;
