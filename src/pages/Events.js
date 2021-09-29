import React, { useState, useEffect } from "react";
import { pasangPenerima, copotPenerima } from "../utils/events/myEventEmitter";

import FormChangeName from "../components/FormChangeName";

function Events() {
  const [name, setName] = useState("");
  //   const inputRef = useRef();
  //   const nameChangeHandler = () => {
  //     setName(inputRef.current.value);
  //   };
  // const emitEvent = (e) => {
  //   e.preventDefault();
  //   myEventEmitter.emit("change-name", e.target.firstname.value);
  // };
  // event => mengirim (emitter), menerima (listener)
  // biasakan set listener di didmount
  // set variabel untuk fungsi listener
  // jika ada listener, jangan lupa dicopot ketika willUnmount
  /**
   * componentDidMount(){
   *    emitter.on(namaEvent, this.handler/listener)
   * }
   * componentWillUnmount(){
   *    emitter.off(nameEvent, this.handler/listener)
   * }
   */
  useEffect(() => {
    const myEventListener = (name) => {
      console.log("event berhasil ditangkap/diterima");
      setName(name);
    };
    pasangPenerima("change-name", myEventListener);

    return () => copotPenerima("change-name", myEventListener);
  }, []);
  return (
    <>
      <main className="container-events">
        <section className="section-hello">
          <p className="text-hello">Hello {name || "Stranger"}</p>
        </section>
        <section className="section-input-name">
          <FormChangeName />
        </section>
      </main>
    </>
  );
}

export default Events;
