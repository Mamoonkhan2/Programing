'use client'
import {  useEffect, useState} from 'react'
import appWriteService from '../../appwrite/config'
import conf from '../../conf/confi'
import '../../App.css'
export default  function NoteList({initialNotes}) {
  const  [notes, setNotes] =  useState(initialNotes)
  const [editingId, setEditingId] = useState(null); // Track WHICH note is editing
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
      const channel = `databases.${conf.databaseId}.collections.${conf.collectionId}.documents`;

      const unsubscribe = appWriteService.client.subscribe(channel, (response) => {
      const changedNote = response.payload;

      // Appwrite events are structured: 'databases.*.collections.*.documents.*.create'
      const isCreate = response.events.some(e => e.endsWith('.create'));
      const isDelete = response.events.some(e => e.endsWith('.delete'));
      const isUpdate = response.events.some(e => e.endsWith('.update'));

      if (isUpdate) {
        // Optimistic update
        setNotes((prev) =>
          prev.map((note) =>
            note.$id === changedNote.$id ? changedNote : note
          )
        );
      }
      if (isCreate) {
        // Check to avoid duplicates if the local state already added it
        setNotes((prev) => {
          if (prev.find(n => n.$id === changedNote.$id)) return prev;
          return [changedNote, ...prev];
        });
      }

      if (isDelete) {
        setNotes((prev) => prev.filter((note) => note.$id !== changedNote.$id));
      }
    });

    return () => unsubscribe();
  },[])
  const handleDelete = async (noteId) => {
    try {
      // Optimistic delete
      await appWriteService.deletePost(noteId);
      document.getElementById(noteId).classList.add('crossed-out');
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = async (id) => {
    try {
      await appWriteService.updateDocument(id,{contant:editContent});
      setEditingId(null);
      setEditContent('');
    } catch (error) {
      console.log(error)
    }
  }
  if(notes.lenght === 0) return <p>No notes yet</p>
  return (
  <ul>
      {notes && notes.map((note) => (
        <li key={note.$id} onDoubleClick={() => handleDelete(note.$id)}>
          {editingId === note.$id ? (
            <> 
              <input 
                type="text" 
                value={editContent} 
                onChange={(e) => setEditContent(e.target.value)} 
              />
              <button onClick={() => handleClick(note.$id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p>{note.contant}</p>
              <button onClick={() => {setEditingId(note.$id) ;setEditContent(note.contant)}}>edit</button>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}