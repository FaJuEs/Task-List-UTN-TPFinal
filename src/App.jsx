import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 70vh;
  margin: 2rem;
`;

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  
  // Carga tareas desde localStorage 
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (storedTasks.length > 0) {
      setTaskList(storedTasks);
    }
  }, []);

  // Guarda tareas en localStorage cada vez que taskList cambia
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const eliminarTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  const addTask = (e) => {
    e.preventDefault();
    const trimmedTaskInput = taskInput.trim();
    if (trimmedTaskInput === "") return alert("Tarea vacía");
    const updatedTaskList = [
      ...taskList,
      { id: idCounter, name: trimmedTaskInput },
    ];
    setTaskInput("");
    setTaskList(updatedTaskList);
    setIdCounter(idCounter + 1);
  };
 //funciones editar y verificar con ayuda de chatgpt
 const editarTask = (index) => {
  const taskToEdit = taskList[index];
  const editedTaskName = window.prompt("Editar tarea", taskToEdit.name);

  if (editedTaskName !== null) {
    const updatedTaskList = taskList.map((task, i) =>
      i === index ? { ...task, name: editedTaskName } : task
    );
    setTaskList(updatedTaskList);
  }
};
const verificarTask = (index) => {
  const updatedTaskList = taskList.map((task, i) =>
    i === index ? { ...task, completed: !task.completed } : task
  );
  setTaskList(updatedTaskList);
};
  return (
    <>
      <Header />
      <Wrapper>
        <TaskForm
          addTask={addTask}
          taskInput={{ value: taskInput, onChange: setTaskInput }}
        />
         <TaskList
          tasks={taskList}
          eliminarTask={eliminarTask}
          editarTask={editarTask}
          verificarTask={verificarTask}
        />
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;
