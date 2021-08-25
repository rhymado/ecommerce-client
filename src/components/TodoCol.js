import React from "react";

const TodoCol = ({ title, todos, isComplete, todoAction }) => {
  return (
    <section className="mx-auto border border-3 border-primary">
      <h2>{title}</h2>
      {todos
        .filter((todo) => todo.isComplete === isComplete)
        .map((todo) => {
          return (
            <div key={todo.id}>
              <h3>{todo.title}</h3>
              {!isComplete && (
                <button onClick={() => todoAction(todo.id)}>Finish</button>
              )}
            </div>
          );
        })}
    </section>
  );
};

export default TodoCol;
