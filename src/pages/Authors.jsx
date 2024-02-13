import React, { useState } from 'react'


 import Avatar1 from "../images/ava1.png";
 import Avatar2 from "../images/ava2.png";
 import Avatar3 from "../images/ava3.png";
 import Avatar4 from "../images/ava4.png";
 import Avatar5 from "../images/ava5.png";
import { Link } from 'react-router-dom';



const authorsData = [
  {id: 1, avatar: Avatar1, name: 'Abhishant Rajput', posts: 3},
  {id: 2, avatar: Avatar2, name: 'Rohan Gupta', posts: 5},
  {id: 3, avatar: Avatar3, name: 'Dhurvil Yadav', posts: 0},
  {id: 4, avatar: Avatar4, name: 'Sneha Rana', posts: 2},
  {id: 5, avatar: Avatar5, name: 'Soni Jay', posts: 1}]

const Authors = () => {

  const [authors,setAuthors] = useState(authorsData)
  return (
    <section className="authors">
      {
        authors.length > 0 ? <div className="container authors__container">

          {
            authors.map(({id,avatar,name,posts})=>{
              return <Link key={id} to={`/posts/users/${id}`} className='author'>

                <div className="author__avatar">
                  <img src={avatar} alt={`This is ${name}`} />
                </div>
                <div className="author_info">
                  <h2>{name}</h2>
                  <p>{posts}</p>
                </div>
              </Link>
            })
          }

        </div> : <h2 className='center'>Not Authors/Users Found</h2>
      }
    </section>
  )
}

export default Authors
