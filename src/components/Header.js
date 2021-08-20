function Header(props) {
  const { title, isLogin } = props;
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
        <div className={ isLogin ? "none" : "btn-login"}>Login</div>
        <div className="btn-register">Register</div>
      </nav>
    </header>
  );
}

export default Header;
