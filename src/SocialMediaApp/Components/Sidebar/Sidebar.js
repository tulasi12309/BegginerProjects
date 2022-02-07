import React from 'react'
import './Sidebar.css'
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ChatIcon from '@material-ui/icons/Chat';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import GroupIcon from '@material-ui/icons/Group';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import EventIcon from '@material-ui/icons/Event';
import SchoolIcon from '@material-ui/icons/School';
function Sidebar() {
    return (
        <div className='sideBar'>
            <div className='sidebarWrapper'>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <RssFeedIcon className='sibebarIcon'/>
                        <span className='sidebarListItemText'>Feed</span>
                    </li>
                    <li className='sidebarListItem'>
                        <ChatIcon className='sibebarIcon'/>
                        <span className='sidebarListItemText'>Chats</span>
                    </li>
                    <li className='sidebarListItem'>
                        <PlayCircleFilledIcon className='sibebarIcon'/>
                        <span className='sidebarListItemText'>Videos</span>
                    </li>
                    <li className='sidebarListItem'>
                        <GroupIcon className='sibebarIcon'/>
                        <span className='sidebarListItemText'>Groups</span>
                    </li>
                    <li className='sidebarListItem'>
                        <BookmarkIcon className='sibebarIcon'/>
                        <span className='sidebarListItemText'>Bookmarks</span>
                    </li>
                    <li className='sidebarListItem'>
                        <HelpOutlineIcon className='sibebarIcon'/>
                        <span className='sidebarListItemText'>Questions</span>
                    </li>
                    <li className='sidebarListItem'>
                        <WorkOutlineIcon className='sibebarIcon'/>
                        <span className='sidebarListItemText'>Jobs</span>
                    </li>
                    <li className='sidebarListItem'>
                        <EventIcon className='sibebarIcon'/>
                        <span className='sidebarListItemText'>Events</span>
                    </li>
                    <li className='sidebarListItem'>
                        <SchoolIcon className='sibebarIcon'/>
                        <span className='sidebarListItemText'>Courses</span>
                    </li>
                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHr'/>
                <ul className='siebarFriendList'>
                    <li className='sidebarFriend'>
                        <img className='sidebarImage' src='/assets/person/Dhoni.jpg' alt=''/>
                        <span className='sidebarFriendName'>MS Dhoni</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarImage' src='/assets/person/Bumrah.jpg' alt=''/>
                        <span className='sidebarFriendName'>Jasprit Bumrah</span>
                    </li><li className='sidebarFriend'>
                        <img className='sidebarImage' src='/assets/person/Rahul.jpg' alt=''/>
                        <span className='sidebarFriendName'> KL Rahul</span>
                    </li><li className='sidebarFriend'>
                        <img className='sidebarImage' src='/assets/person/devdutt.jpg' alt=''/>
                        <span className='sidebarFriendName'>Devdutt Padikkal</span>
                    </li><li className='sidebarFriend'>
                        <img className='sidebarImage' src='/assets/person/mohammed-siraj.jpg' alt=''/>
                        <span className='sidebarFriendName'>Mohammed Siraj</span>
                    </li><li className='sidebarFriend'>
                        <img className='sidebarImage' src='/assets/person/AB-de-Villiers.jpg' alt=''/>
                        <span className='sidebarFriendName'>AB De Villiers</span>
                    </li><li className='sidebarFriend'>
                        <img className='sidebarImage' src='/assets/person/Rishabh-Pant.jpg' alt=''/>
                        <span className='sidebarFriendName'>Rishabh Pant</span>
                    </li><li className='sidebarFriend'>
                        <img className='sidebarImage' src='/assets/person/Thakur.jpg' alt=''/>
                        <span className='sidebarFriendName'>Shardul Thakur</span>
                    </li><li className='sidebarFriend'>
                        <img className='sidebarImage' src='/assets/person/Mahirat.jpg' alt=''/>
                        <span className='sidebarFriendName'>Mahirat</span>
                    </li><li className='sidebarFriend'>
                        <img className='sidebarImage' src='/assets/person/Virat.jpg' alt=''/>
                        <span className='sidebarFriendName'> Virat Kohli</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
