import React, { useState } from "react";
import { DummyPosts } from "../Data.js";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [posts, setPosts] = useState(DummyPosts);

  return (
    <section className="dashboard">
      {posts.length > 0 ? (
        <div className="container dashboard__container">
          {posts.map((post) => {
            return (
              <article key={post.id} className="dashboard__post">
                <div className="dashboard__post-info">
                  <div className="dashboard__post-thumbnail">
                    <img src={post.thumbnail} />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard__post-actions">
                  <Link to={`/posts/${post.id}`} className="btn sm">
                    view
                  </Link>
                  <Link
                    to={`/posts/${post.id}/edit`}
                    className="btn sm primary"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/posts/${post.id}/delete`}
                    className="btn sm delete"
                  >
                    delete
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2 className="center"> You have not got posts Yet</h2>
      )}
    </section>
  );
};

export default Dashboard;
