import React, { useEffect, useState } from "react";
import "./login.css";
import Button from "../button/Button";
import Input from "../input/Input";
import SignUp from "../SignUp/SignUp";
import GoogleButton from "../GoogleButton/GoogleButton";
import FacebookButton from "../FacebookButton/FacebookButton";

const Login = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = () => {
    window.location.href = "http://localhost:3000/Home";
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
            />
            <Button onClick={handleLogin}>Login</Button>
            <GoogleButton />
            <FacebookButton />
            <SignUp />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
