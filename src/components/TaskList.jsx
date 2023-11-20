
import TaskItem from './TaskItem';


const TaskList = ({ tasks, eliminarTask, editarTask, verificarTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          index={index}
          eliminarTask={eliminarTask}
          editarTask={editarTask}
          verificarTask={verificarTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
