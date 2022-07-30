import React from "react";
import "./Login.css";
import { AiFillEye } from "react-icons/ai";

const Login = () => {
  return (
    <section className="loginSection">
      <div className="loginBox">
        <div>
          {" "}
          <h3>
            Globetech <br />
            company limited
          </h3>
          <p>Make yourself digitalize & more efficient</p>
        </div>

        <div className="loginItemField">
          <div className="mainLoginField">
            <div>
              <h2>Welcome</h2>
              <p>sign in to your account</p>
            </div>
            <div>
              <input type="email" placeholder="Enter Email.." />
            </div>
            <div className="aiIcon">
              <input type="password" placeholder="Enter Password.." />
              <AiFillEye />
            </div>
            <div>
              <input type="submit" value="Login" className="loginBtn" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
