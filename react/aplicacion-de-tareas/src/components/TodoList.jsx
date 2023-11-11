import TaskForm from "./TaskForm";
import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const agregarTarea = (task) => {
    if (task.texto.trim()) {
      task.texto = task.texto.trim();
      const tareasActualizadas = [task, ...tasks];
      setTasks(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tasks.filter((task) => task.id !== id);
    setTasks(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tasks.map((task) => {
      if (task.id === id) {
        task.completada = !task.completada;
      }
      return task;
    });
    setTasks(tareasActualizadas);
  };

  return (
    <>
      <TaskForm onSubmit={agregarTarea} />
      <div className="tareas-listas-contenedor">
        {tasks.map((task) => (
          <Todo
            key={task.id}
            id={task.id}
            texto={task.texto}
            completada={task.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
