import React, { createContext, Component } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export class ThemeProvider extends Component {
  state = {
    theme: themes.light,
  };

  toggleTheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === themes.dark ? themes.light : themes.dark,
      };
    });
  };

  render() {
    const Children = this.props.children;
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        {Children}
      </ThemeContext.Provider>
    );
  }
}
/**
 * <ThemeProvider>
 *  <div>
 *  <p>
 *  <button>
 * </ThemeProvider>
 */
