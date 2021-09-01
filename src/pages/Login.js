import React from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
// import { Button } from 'react-bootstrap';

import Header from "../components/Header";
// import { postLogin } from "../utils/https/auth";
import { loginAction } from "../redux/actionCreators/auth";

class Login extends React.Component {
  onSubmitHandler = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    const body = {
      username: username.value,
      password: password.value,
    };
    this.props.onLogin(body);

    // postLogin(body)
    //   .then(({ data }) => {
    //     /**data
    //      * {
    //      *  token,
    //      *  userInfo: {
    //      *    profile,
    //      *    role,
    //      *    id
    //      *  }
    //      * }
    //      */
    //     const { token } = data.result;
    //     localStorage.setItem("token", token);
    //     onLoggedIn();
    //   })
    //   .catch((err) => console.log(err));
  };
  componentDidUpdate() {
    if (this.props.auth.isFulfilled) {
      this.props.onLoggedIn();
    }
  }
  render() {
    const { history } = this.props;
    return (
      <>
        <Header title="login" isLogin />
        <form className="ms-2" onSubmit={this.onSubmitHandler}>
          <label htmlFor="username">
            Username:
            <input type="text" name="username" id="username" />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" name="password" id="password" />
          </label>
          <Button className="mt-2" variant="primary" size="md" type="submit">
            Login
          </Button>
        </form>
        <div className="mt-2 ms-2">
          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              history.push("/");
            }}
          >
            Go To Home
          </Button>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (body) => {
      dispatch(loginAction(body));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
