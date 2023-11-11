import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = (props) => {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value)
  }

  const manejarEnvio = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva)
  }

  return (
    <form className="tarea-formulario"
    onSubmit={manejarEnvio}
    >
      <input
        className="tarea-input"
        type="text"
        placeholder="Type a new task"
        name="texto"
        autoComplete="off"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">add task</button>
    </form>
  );
};

export default TaskForm;
