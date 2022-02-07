import React from 'react'
import Share from '../Share/Share'
import './Feed.css'
import {Posts} from "../../../dummyData"
import Post from '../Post/Post'
function Feed() {
    return (
        <div className='feed'>
            <div className='feedWrapper'>
                <Share/>
                {Posts.map((p)=>(
                    <Post key={p.id} post={p}/>
                    
                ))}
            </div>
        </div>
    )
}

export default Feed
