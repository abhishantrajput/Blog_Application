import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    setuserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className="login">
      <div className="container">
        <h2>Please Login Yourself</h2>

        <form className="form login__form">
          <p className="form-error__message">Error message</p>

         
          <input
            type="email"
            placeholder="Write Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler} autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
         

          <button type="submit" className="btn primary">
            login
          </button>
        </form>
        <small>
           Don't have an account?<Link to={"/register"}>Sign up</Link>
        </small>
      </div>
    </section>
  );
}

export default Login;
