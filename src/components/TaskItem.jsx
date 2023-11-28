import "./styles-items.css";

const TaskItem = ({ task, index, eliminarTask, verificarTask, editarTask }) => {
  const taskItemStyle = {
    textDecoration: task.completed ? "line-through" : "none",
    backgroundColor: task.completed ? "white" : "",
  };
  return (
    <li className="task-item" style={taskItemStyle}>
      <div className="task-name">{task.name}</div>
      <div className="task-actions">
        <button className="editar" onClick={() => editarTask(index)}>
          <p>Editar tarea</p>✏️
        </button>
        <button className="eliminar" onClick={() => eliminarTask(index)}>
          <p>Eliminar</p>🗑️
        </button>
        <button className="verificar" onClick={() => verificarTask(index)}>
          <p>Realizada</p>✔️
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
