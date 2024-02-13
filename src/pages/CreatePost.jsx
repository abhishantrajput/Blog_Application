import React, {useState} from "react"

const CreatePost = () => {



  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");


  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>

        <p className="form-error__message">This is an Error Message</p>

        <form className="form create-post__form">
          <input type="text" placeholder="title" value = {title}  onChange ={(e)=>setTitle(e.target.value)} autoFocus/>
          <select name="category" value={category} />
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
