import React from 'react'


import {Link} from 'react-router-dom'

import Avatar1 from "../images/avatar4.jpg"

const PostAuthor = ({postID}) => {
  return (
    <Link to={`/posts/users/${postID}`} className='post__author'>

        <div className="post__author-avatar">
            <img src={Avatar1} alt='Author Img' />
        </div>

        <div className="post__author-details">

            <h5>by Sneha Rana</h5>
            <small>Just Now</small>
        </div>
    
    </Link>
  )
}

export default PostAuthor