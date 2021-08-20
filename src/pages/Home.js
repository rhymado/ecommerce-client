import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

class Home extends Component {
  state = {
    clicked: 0,
  };
  componentDidMount() {
    const clicked = localStorage.getItem("clicked");
    if (clicked) this.setState({ clicked: Number(clicked) });
  }
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className="home-page">
        <Header title="home" />
        <main>
          <section>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus incidunt, qui eaque accusamus illum voluptas odit
              perferendis magni. Modi adipisci unde officiis deserunt rerum quos
              nam dolorum, maxime saepe corporis.
            </p>
          </section>
          <section>
            <div
              className="click-me-btn"
              onClick={() =>
                this.setState((prevState) => {
                  const nextClicked = prevState.clicked + 1;
                  localStorage.setItem("clicked", String(nextClicked));
                  return {
                    clicked: nextClicked,
                  };
                })
              }
            >
              <p>Click Me</p>
            </div>
          </section>
          <section>
            <p>Button have been clicked {this.state.clicked} times</p>
          </section>
          <Link to="/auth">
            <div>
              <p>Go To Login</p>
            </div>
          </Link>
        </main>
        <footer className="footer">Copyright</footer>
      </div>
    );
  }
}

export default Home;
