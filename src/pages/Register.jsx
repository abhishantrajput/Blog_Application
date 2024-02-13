import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeInputHandler = (e) => {
    setuserData((prevState) => {

      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className="register">
      <div className="container">
        <h2>Please Register Yourself</h2>

        <form className="form register__form">
          <p className="form-error__message">Error message</p>

          <input
            type="text"
            placeholder="Write full Name"
            name="name"
            value={userData.name}
            onChange={changeInputHandler}
          />
          <input
            type="email"
            placeholder="Write Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={changeInputHandler}
          />

          <button type="submit" className="btn primary">Submit</button>
        </form>
        <small>Already have an account?<Link to={"/login"}>Sign in</Link></small>
      </div>
    </section>
  );
}

export default Register;
