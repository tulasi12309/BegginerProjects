import React from 'react'
import {MdSearch} from 'react-icons/md'
import './Searchbar.css'
function Searchbar({handleSearchText}) {
  return (
    <div className='search'>
        <MdSearch className='search-icons' size='1.3rem'/>
        <input type='text' placeholder='Type to search' onChange={(e)=>handleSearchText(e.target.value)}/>
    </div>
  )
}

export default Searchbar