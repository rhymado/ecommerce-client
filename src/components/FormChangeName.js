import React from "react";
import { myEventEmitter } from "../utils/events/myEventEmitter";

function FormChangeName() {
  const emitEvent = (e) => {
    e.preventDefault();
    myEventEmitter.emit("change-name", e.target.firstname.value);
  };
  return (
    <form className="form-input-name" onSubmit={emitEvent}>
      <input type="text" className="input-name" name="firstname" />
      <button type="submit" className="button-event">
        <p className="event-text">Change Name</p>
      </button>
    </form>
  );
}

export default FormChangeName;
