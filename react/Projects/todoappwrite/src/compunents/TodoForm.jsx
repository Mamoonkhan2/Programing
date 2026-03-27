import { useState } from 'react';
import { createFile } from '../appwrite/fileAppwrite';

function TodoForm() {
    const [text, setText] = useState('');
    const HandleUpload = async (e) =>{
        e.preventDefault();
        try {
            createFile(text).then(function (response) {
                console.log('create succesful');
                console.log(response);
                window.location.reload();
            },function (error) {
                console.log('error in uploading file')
                console.log(error)
            });
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form className="flex gap-2 mb-8 mt-8" onSubmit={(e)=>HandleUpload(e)}>
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 text-lg"
        />
        <button
            type="submit"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors"
        >
            Add Todo
        </button>
        </form>
    );
}

export default TodoForm;