import React from 'react'
import './Rightbar.css'
function Rightbar() {
    return (
        <div className='rightBar'>
            <div className='rightbarWrapper'>
                <div className='birthdayContainer'>
                    <img className='birthdayImage' src='assets/gift.png' alt=''/>
                    <span className='birthdayText'> 
                        <b>Pola Foster</b> and <b> 3 other friends </b> have a birthday today.
                    </span>
                </div>
                <img className='rightbarAd' src='/assets/ad.png' alt=''/>
                <h4 className='rightbarTitle'>Online Friends</h4>
                <ul className='rightbarFriendList'>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImageContainer'>
                        <img className='rightbarProfileImage' src='/assets/person/Bumrah.jpg' alt=''/>
                        <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'> Jasprit Bumrah</span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImageContainer'>
                        <img className='rightbarProfileImage' src='/assets/person/Dhoni.jpg' alt=''/>
                        <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'>MS Dhoni</span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImageContainer'>
                        <img className='rightbarProfileImage' src='/assets/person/Mahirat.jpg' alt=''/>
                        <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'> Mahirat</span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImageContainer'>
                        <img className='rightbarProfileImage' src='/assets/person/Rahul.jpg' alt=''/>
                        <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'> KL Rahul</span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImageContainer'>
                        <img className='rightbarProfileImage' src='/assets/person/mohammed-siraj.jpg' alt=''/>
                        <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'> Siraj</span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImageContainer'>
                        <img className='rightbarProfileImage' src='/assets/person/AB-de-Villiers.jpg' alt=''/>
                        <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'> AB De Villiers</span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImageContainer'>
                        <img className='rightbarProfileImage' src='/assets/person/devdutt.jpg' alt=''/>
                        <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'> Devdutt Padikkal</span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImageContainer'>
                        <img className='rightbarProfileImage' src='/assets/person/Rishabh-Pant.jpg' alt=''/>
                        <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'> Rishabh Pant</span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImageContainer'>
                        <img className='rightbarProfileImage' src='/assets/person/Thakur.jpg' alt=''/>
                        <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'> Shardul Thakur</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Rightbar
