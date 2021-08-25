import React, { Component } from "react";

import { ThemeContext } from "../utils/contexts/ThemeProvider";

class ThemeChild extends Component {
  render() {
    const { theme, toggleTheme } = this.context;
    return (
      <>
        <div
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
        </button>
      </>
    );
  }
}
ThemeChild.contextType = ThemeContext;

export default ThemeChild;
