import React, { useState } from 'react'
import './AddNote.css'
function AddNote({handleaddNote}) {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;
    const hanldeChange = (e) =>{
        if(characterLimit-e.target.value.length>=0){
        setNoteText(e.target.value);
        }
    }
    const handleClick = () =>{
        if(noteText.trim().length>0){
        handleaddNote(noteText);
        setNoteText('')
        }
    }
    return (
    <div className='note new'>
        <textarea rows='8' cols='10' placeholder='Type to add a note..' onChange={hanldeChange} value={noteText}>
        </textarea>
        <div className='note-footer'>
          <small>
              {characterLimit-noteText.length} Remaining
          </small>
          <button className='save' onClick={handleClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote