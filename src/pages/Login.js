import React from "react";
import Button from "react-bootstrap/Button";
// import { Button } from 'react-bootstrap';

import Header from "../components/Header";

function Login(props) {
  const { history } = props;
  return (
    <>
      <Header title="login" isLogin />
      <form>
        <input type="text" />
        <input type="date" />
        <select defaultValue="">
          <option value="" disabled></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </form>
      <div
        className="btn btn-primary"
        onClick={() => {
          history.push("/");
        }}
      >
        <p>Go To Home</p>
      </div>
      <Button variant="secondary" size="lg">
        Go To Home
      </Button>
    </>
  );
}

export default Login;
