import NewNoteForm from './components/NewForm'
import NoteList from './components/NotesList'
import '../styles/global.css'
import { useEffect, useState } from 'react';
import appWriteService from '../appwrite/config';

export default  function Home() {
  const [notes,setNotes] = useState([]);
  useEffect(()=>{
    async function getNotes(){
      const result = await appWriteService.getPosts()
      if(result){
        setNotes(result.documents);
      }

    }
    getNotes();
  },[])
  if(notes.length === 0) return( <><p>No notes yet</p> <NewNoteForm setNotes={setNotes}/></>)
  return (
    <div>
      <header>
        <h1>Note Ninja</h1>
      </header>

      {notes && <NoteList initialNotes={notes}/>}
      <NewNoteForm setNotes={setNotes} />
    </div>
  );
}