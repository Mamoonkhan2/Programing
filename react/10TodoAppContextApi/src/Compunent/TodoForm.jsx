import { useTodo } from "../Context/TodoContext";
import { useState } from "react";
function TodoForm() {
    const { addTodo } = useTodo();
    const [todoMsg, setTodoMsg] = useState("");   

    return (
        <form  className="flex" onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission logic here    
            addTodo({todo:todoMsg,completed:false})
            setTodoMsg("");
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

export default TodoForm;
