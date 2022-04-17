import React, { useEffect, useState } from "react";
import "./login.css";
import Button from "../button/Button";
import Input from "../input/Input";
import NoAccount from "../NoAccount/NoAccount";
import GoogleButton from "../GoogleButton/GoogleButton";
import FacebookButton from "../FacebookButton/FacebookButton";
import Axios from "axios";

const Login = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const login = () => {
    Axios({
      method: "POST",
      data: {
        email: loginEmail,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  };

  useEffect(() => {
    if (loginEmail.length > 0) {
      setIsInvalid(!validateEmail(loginEmail));
    } else {
      setIsInvalid(false);
    }
  }, [loginEmail]);

  return (
    <main>
      <div className="center">
        <div className="box">
          <img className="banner" src={"/image/run3-1.png"} />
          <div className="container">
            <h1>Welcome to iTRACK</h1>
            <h2>Let’s log in to be the better you.</h2>
            <Input
              id="email"
              type="text"
              name="email"
              placeholder="Enter your email"
              value={loginEmail}
              isInvalid={isInvalid}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <a id="login-button" href="http://localhost:3000/add-activity">
              <Button onClick={login}>Login</Button>
            </a>
            <GoogleButton />
            <FacebookButton />
            <NoAccount onSignUpClick={() => alert("sign up")} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
