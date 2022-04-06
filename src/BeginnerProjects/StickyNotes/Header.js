import React from 'react'
import './AddNote.css'
import './Header.css'
function Header({handleDarkMode}) {
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button className='save' onClick={()=>handleDarkMode((prevDarkMode)=>!prevDarkMode)}>Toggle Mode</button>
    </div>
  )
}

export default Header