import React from 'react'
import "./Note.css"
import {MdDeleteForever} from 'react-icons/md'
function Note({id,text,date,handledeleteNote}) {
  return (
    <div className='note'>
        <span>
            {text}
        </span>
        <div className='note-footer'>
        <small>
            {date}
        </small>
        <MdDeleteForever className='delete-icon' size='1.3em' onClick={()=>handledeleteNote(id)}/>
        </div>
    </div>
  )
}

export default Note