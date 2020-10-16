import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const [loginInfo, setLoginInfo] = useState(initialState);
  const { push } = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const login = (e) => {
    e.preventDefault();
    console.log(loginInfo);
    axios
      .post("http://localhost:5000/api/login", loginInfo)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);
        push("/protected");
      })
      .catch((err) => console.log(err));
  };

  const onChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={login}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={loginInfo.username}
            onChange={onChange}
          />{" "}
        </label>
        <br /> <br />
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={loginInfo.password}
            onChange={onChange}
          />{" "}
        </label>
        <br /> <br />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
