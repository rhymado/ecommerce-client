import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import Header from "../components/Header";

class Home extends Component {
  state = {
    clicked: 0,
    users: [],
    history: [],
  };
  getUserHandler = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    Axios.get(url)
      .then(({ data }) => {
        this.setState({
          users: data,
        });
      })
      .catch((error) => console.log(error));
  };
  getHistoryHandler = () => {
    const url = "https://api.spacexdata.com/v3/history";
    Axios.get(url, {
      params: {
        limit: 3,
      },
    })
      .then(({ data }) => {
        this.setState({ history: data });
      })
      .catch((error) => console.log(error));
  };
  getProductsHandler = async () => {
    const url = "http://localhost:8000/products";
    const query = this.props.location.search;
    // const params = {};
    // const queryArr = query.slice(1).split("&");
    const urlWithQuery = url + query;
    await Axios.get(urlWithQuery)
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error));
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    const { name, price, category_id } = e.target;
    const body = {
      name: name.value,
      price: price.value,
      category_id: category_id.value,
      user_id: this.props.user.id,
    };
    const url = "http://localhost:8000/products";
    Axios.post(url, body)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  async componentDidMount() {
    try {
      await this.getProductsHandler();
    } catch (err) {
      console.log(err);
    }
    const clicked = localStorage.getItem("clicked");
    if (clicked) this.setState({ clicked: Number(clicked) });
  }
  render() {
    console.log(this.props.location);
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
          {/* <section>
            <button onClick={this.getProductsHandler}>Get All Products</button>
          </section> */}
          <section>
            <form className="form-post-product" onSubmit={this.onSubmitHandler}>
              <input type="text" name="name" placeholder="name" />
              <input type="text" name="price" placeholder="price" />
              <select name="category_id" defaultValue="0">
                <option value="0" disabled>
                  category
                </option>
                <option value="1">Pakaian</option>
                <option value="2">Makanan</option>
                <option value="3">Peripheral</option>
              </select>
              <button type="submit">Post Product</button>
            </form>
          </section>
          <section>
            <button onClick={this.getUserHandler}>Get User List</button>
            {this.state.users.length > 0 ? (
              <article>
                <ol>
                  {this.state.users.map((user) => {
                    return <li key={user.id}>{user.name}</li>;
                  })}
                </ol>
              </article>
            ) : (
              ""
            )}
          </section>
          <section>
            <button onClick={this.getHistoryHandler}>Get SpaceX History</button>
            {this.state.history.length > 0 && (
              <article>
                <ol>
                  {this.state.history.map(({ id, title }) => {
                    return <li key={id}>{title}</li>;
                  })}
                </ol>
              </article>
            )}
          </section>
          <Link to="/auth">
            <div style={{ backgroundColor: "lightgrey" }}>
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
