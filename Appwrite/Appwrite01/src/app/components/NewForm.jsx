'use client'
import { useState } from 'react'
import appWriteService from '../../appwrite/config';

const NewForm = ({setNotes}) => {
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!content) return alert('Please enter a note')
    try {
      const response = await appWriteService.createPost({contant:content}); // appwrite post create ke 
      if(response) { // aw bea response na pas note ke e add ke aw alta update she aw screen rerender she 
        setNotes(prev => [...prev, response]) 
        setContent('');
        
      }
    } catch (error) {
      console.log(error)
      return error
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your note here..."
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NewForm