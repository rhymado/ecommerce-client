import React, { Component } from "react";

import TodoCol from "../components/TodoCol";

class Todo extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "todo 1",
        isComplete: false,
      },
      {
        id: 2,
        title: "todo 2",
        isComplete: true,
      },
      {
        id: 3,
        title: "todo 3",
        isComplete: true,
      },
      {
        id: 4,
        title: "todo 4",
        isComplete: false,
      },
      {
        id: 5,
        title: "todo 5",
        isComplete: false,
      },
    ],
  };

  todoDoneHandler = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id !== id) return todo;
      return {
        ...todo,
        isComplete: true,
      };
    });
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <>
        <header>
          <h1>Todo List</h1>
        </header>
        <main className="d-flex w-100">
          <TodoCol
            title="To Do"
            todos={this.state.todos}
            isComplete={false}
            todoAction={this.todoDoneHandler}
          />
          {/* <section className="mx-auto border border-3 border-primary">
            <h2>To Do</h2>
            {this.state.todos
              .filter((todo) => !todo.isComplete)
              .map((todo) => {
                return (
                  <div key={todo.id}>
                    <h3>{todo.title}</h3>
                    <button onClick={() => this.todoDoneHandler(todo.id)}>
                      Finish
                    </button>
                  </div>
                );
              })}
          </section> */}
          <TodoCol title="Done" todos={this.state.todos} isComplete={true} />
          {/* <section className="mx-auto border border-3 border-primary">
            <h2>Done</h2>
            {this.state.todos
              .filter((todo) => todo.isComplete)
              .map((todo) => {
                return (
                  <div key={todo.id}>
                    <h3>{todo.title}</h3>
                  </div>
                );
              })}
          </section> */}
        </main>
      </>
    );
  }
}

export default Todo;
