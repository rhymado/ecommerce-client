import React, { Component } from "react";

// import { ThemeContext } from "../utils/contexts/ThemeProvider";
import ThemeChild from "../components/ThemeChild";

class Theme extends Component {
  render() {
    // const { theme, toggleTheme } = this.context;
    return (
      <main style={{ height: "100vh", backgroundColor: "lightpink" }}>
        {/* <div
          className="d-flex justify-content-center align-items-center w-100 p-2 rounded"
          style={{ backgroundColor: theme.foreground }}
        >
          <div
            className="square rounded"
            style={{ backgroundColor: theme.background }}
          ></div>
        </div>
        <button
          className="btn btn-large btn-primary my-2"
          onClick={toggleTheme}
        >
          Ganti Tema
        </button> */}
        <ThemeChild />
      </main>
    );
  }
}
// Theme.contextType = ThemeContext;

export default Theme;
