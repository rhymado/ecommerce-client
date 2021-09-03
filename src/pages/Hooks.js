import React, { useState, useEffect, useContext } from "react";

import Header from "../components/Header";
import { getUser } from "../utils/https/user";
import { ThemeContext } from "../utils/contexts/ThemeProvider";

const Hooks = () => {
  const operators = ["+", "-", "/", "x", "="];
  const numbers = "123456789*0#";
  //   const [state, setState] = useState()
  const [calcScreen, setCalcScreen] = useState("0");
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("Hooks");
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("effect1");
  });

  useEffect(() => {
    console.log("effect2");
    getUser()
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []); // mirip dengan componentDidMount

  useEffect(() => {
    console.log(theme);
  }, [calcScreen, theme]);

  console.log("return", users);
  return (
    <>
      <Header title={title} />
      <main className="d-flex flex-column align-items-center">
        <section className="calc-wrapper d-flex flex-column justify-content-evenly align-items-center">
          <div className="calc-screen px-2">{calcScreen}</div>
          <div className="calc-input d-flex justify-content-center">
            <div className="calc-numbers d-flex flex-wrap justify-content-center align-items-center">
              {numbers.split("").map((number, idx) => {
                return (
                  <div
                    key={idx}
                    className="calc-number"
                    onClick={() => {
                      if (number === "*") return setCalcScreen("0");
                      const newCalcScreen =
                        calcScreen === "0" ? number : calcScreen + number;
                      setCalcScreen(newCalcScreen);
                    }}
                  >
                    <p>{number}</p>
                  </div>
                );
              })}
            </div>
            <div className="calc-operators d-flex flex-column">
              {operators.map((operator, idx) => {
                return (
                  <div key={idx} className="calc-operator">
                    <p>{operator}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="title-changer-wrapper">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newTitle = e.target.title.value;
              setTitle(newTitle);
            }}
          >
            <label>title:</label>
            <input type="text" name="title" />
            <button type="submit">Change Title</button>
          </form>
        </section>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </main>
    </>
  );
};

export default Hooks;
