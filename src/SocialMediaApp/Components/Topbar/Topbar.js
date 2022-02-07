import React from 'react'
import './Topbar.css'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo'>Social</span>
            </div>
            <div className='topbarCenter'>
                <div className='searchbar'>
                    <SearchIcon className='searchIcon'/>
                <input placeholder='search for friend,post or video' className='searchInput'/>
                </div>
            </div>
            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className='topbarLink'>HomePage</span>
                    <span className='topbarLink'>TimeLine</span>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconItem'>
                        <PersonIcon/>
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className='topbarIconItem'>
                        <ChatIcon/>
                        <span className='topbarIconBadge'>2</span>
                    </div>
                    <div className='topbarIconItem'>
                        <NotificationsIcon/>
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>
                <img src='/assets/person/Virat.jpg' alt='' className='topbarImage'/>
            </div>
        </div>
    )
}

export default Topbar
