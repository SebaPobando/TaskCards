import React from "react";

function mostrarAlerta() {
  const confirmar = window.confirm(
    "¿Estás seguro que quieres eliminar la tarea?"
  );
  if (confirmar) {
    console.log("Borrado con éxito");
  } else {
    console.log("Borrado cancelado");
  }
}

function TaskCard({ task }) {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={mostrarAlerta}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
