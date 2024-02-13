import React from "react";
import PostAuthor from "../components/PostAuthor.jsx";

import Thumbnail from "../images/blog22.jpg";

import { Link } from "react-router-dom";
const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post__detail-container">
        <div className="post-detail__header">
          <PostAuthor />

          <div className="post-detail__buttons">
            <Link to={"/posts/werwer/edit"} className="btn sm primary">
              {" "}
              Edit
            </Link>
            <Link to={"/posts/werwer/delete"} className="btn sm delete">
              {" "}
              Delete
            </Link>
          </div>
        </div>

        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          exercitationem nihil similique obcaecati ratione consequuntur at, quas
          fugiat? Suscipit quas possimus neque magni dolor eaque, repellendus,
          porro officiis cum sint dolorum? Reiciendis, ipsa officiis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          aliquid nam voluptatem eius deleniti pariatur blanditiis consequatur,
          quos molestiae reiciendis, ab error. Voluptatum officia soluta quod
          nihil, obcaecati in et deleniti beatae aliquam, expedita rem
          voluptates nulla asperiores delectus adipisci, repudiandae quis at.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          incidunt iste iusto ratione.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quae
          praesentium iste consectetur quibusdam perferendis. Numquam amet nemo
          dolorum illum molestias eius obcaecati dolorem, enim dignissimos
          aperiam quo unde doloribus labore voluptates accusantium? Officiis
          omnis cupiditate ipsam, in aliquam tempore perferendis commodi
          delectus deleniti, possimus totam ut quod magni soluta voluptates
          nostrum nobis voluptate! Voluptates repellendus molestiae hic
          consectetur explicabo qui cum tenetur laboriosam laudantium omnis!
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
