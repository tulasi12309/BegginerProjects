import React, { useState } from 'react'
import './Post.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Users} from '../../../dummyData'
function Post({post}) {
    const[like,setLike] = useState(post.like);
    const[isLiked,setIsLiked] = useState(false);
    // console.log(post);
    const likeHandler = () =>{
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img className='postProfileImage' src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt=''/>
                        <span className='postUsername'>{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className='postCenter'>
                    <div className='postText'>
                        {post?.desc}
                    </div>
                    <img className='postImage' src={post.photo} alt=''/>
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                          <img className='likeIcon' src='/assets/like.png' onClick={likeHandler} alt=''/>  
                          <img className='likeIcon' src='/assets/heart.png' onClick={likeHandler} alt=''/>  
                          <span className='postLikeCounter'> {like} liked it</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommenttext'>{post.comment} comments</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Post
