import React, { useState } from 'react'
import { DummyPosts } from '../Data';
import PostItem from '../components/PostItem';

const CategoryPosts = () => {

  const [posts,setPosts] = useState(DummyPosts)
  return (
     <section className='posts'>
    {
     posts.length > 0 ?  <div className="container posts__container">
     {posts.map(({ id, thumbnail, title, category, dosc, authorID }) => {
       return (
         <PostItem
           key={id}
           postID={id}
           thumbnail={thumbnail}
           category={category}
           title={title}
           dosc={dosc}
           authorID={authorID}
         />
       );
     })}
   </div> : <h2 className="center">No Posts found</h2>
    }
   </section>
  )
}

export default CategoryPosts;
