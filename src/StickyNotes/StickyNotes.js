import React, { useEffect, useState } from 'react'
import Note from './Note'
import {nanoid} from 'nanoid'
import "./StickyNotes.css"
import AddNote from './AddNote';
import Searchbar from './Searchbar';
import Header from './Header';
import './Header.css'
function StickyNotes() {
  const [notes, setNotes] = useState([
    {
      id:nanoid(),
      text:"This is my first note",
      date:"15/04/2021"
    },
    {
      id:nanoid(),
      text:"This is my second note",
      date:"01/04/2021"
    },
    {
        id:nanoid(),
        text:"This is my third note",
        date:"03/04/2021"
    },
    {
        id:nanoid(),
        text:"This is my fourth note",
        date:"27/04/2021"
    },
    ]);
    const [searchText, setSearchText] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
      const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
      if(savedNotes){
        setNotes(savedNotes)
      }
    }, [])
    useEffect(() => {
      localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
    }, [notes])
    
    const addNote = (text) =>{
      const date = new Date();
      const newNote = {
          id:nanoid,
          text:text,
          date:date.toLocaleDateString()
      }
      const newNotes = [...notes,newNote]
      setNotes(newNotes)
    }
    const deleteNote = (id) =>{
     const newNotes= notes.filter((note)=>note.id !== id)
     setNotes(newNotes)
    }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className='container'>
    <Header handleDarkMode={setDarkMode}/>
    <Searchbar handleSearchText={setSearchText}/>
    <div className='note-list'>
        {notes.filter((note)=>note.text.toLowerCase().includes(searchText))
              .map((note) =><Note id={note.id} text={note.text} date={note.date} handledeleteNote = {deleteNote}/>)
        }
        <AddNote handleaddNote={addNote}/>
    </div>
    </div>
    </div>
  )
}

export default StickyNotes