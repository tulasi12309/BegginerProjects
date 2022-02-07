import React from 'react'
import './Profile.css'
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/Rightbar/Rightbar'
function Profile() {
    return (
        <div>
           <Topbar/>
           <div className='profileContainer'>
           <Sidebar/>
            <div className='profileRight'>
                <div className='profileRightTop'>
                    <div className='profileCover'>
                    <img className='profileCoverImg' src='/assets/post/3.jpeg' alt=''/>
                    <img className='profileUserImg' src='/assets/person/virat.jpg' alt=''/>
                    </div>
                    <div className='profileInfo'>
                        <h4 className='profileInfoName'>Kosaraju Tulasi</h4>
                        <span className='profileInfoDescription'>Hello, My Friends</span>
                    </div>
                </div>
                <div className='profileRightBottom'>
                    <Feed/>
                    <Rightbar/>
                </div>
            </div>
           </div> 
        </div>
    )
}

export default Profile
