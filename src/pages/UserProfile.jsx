import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/avatar15.jpg";
import { GrUpdate } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confimPassword, setConfirmPassword] = useState("");

  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={"/myposts/sfdfs"} className="btn">
          My Posts
        </Link>

        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} />
            </div>

            {/* Form to update Author/User Profile */}

            <form className="avatar__form">
              <input
                type="file"
                name="avatar"
                id="avatar1"
                onChange={(e) => e.target.files[0]}
                accept="png, jpg, jpeg"
              />

              <label htmlFor="avatar1">
                <GrUpdate />
              </label>
            </form>
            <button className="avatar__profile-btn">
              <FaCheck />
            </button>
          </div>
          <h1>Abhishant Rajput</h1>

          {/* Form  */}

          <form action="" className="form profile__form">
            <p className="form-error__message">This is Error Message</p>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confimPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button type="submit" className="btn primary">
              Update Details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
