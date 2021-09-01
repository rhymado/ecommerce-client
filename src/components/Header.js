import { withRouter } from "react-router-dom";

function Header(props) {
  const { title, isLogin, history } = props;
  return (
    <header className="nav-header">
      <nav>
        <div className="logo">
          <div>
            <div></div>
          </div>
        </div>
        <div className="header-title">
          <h1>{title ? title.toUpperCase() : "PLZ GIVE PROPS"}</h1>
        </div>
        <p>Home</p>
        <p>Profile</p>
        <div
          className={isLogin ? "none" : "btn btn-login"}
          onClick={() => history.push("/auth")}
        >
          Login
        </div>
        <div className="btn-register">Register</div>
      </nav>
    </header>
  );
}

export default withRouter(Header);
// HOC => Higher Order Component
