import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  // initializes tasks from LocalStorage if available.
  const [tasks,setTasks] = useState(()=>{  //Holds list of tasks in state
    const saved = localStorage.getItem('tasks'); //Loads and saves tasks to LocalStorage
    return saved ? JSON.parse(saved):[]; //passes functions and data to child components
  });

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks]); // saves tasks to localstorage whenever they change.

  const [editingTask, setEditingTask] = useState(null);

  const saveTask = (text) => {
  if (editingTask) {
    setTasks(tasks.map(task =>
      task.id === editingTask.id ? { ...task, text } : task
    ));
    setEditingTask(null);
  } else {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  }
};
  // const addTask = (task) => {
  //   setTasks([...tasks,{id:Date.now(),text:task,completed:false}]);
  // }; //Adds a new task with a unique ID.

  const deleteTask = (id) =>{
    setTasks(tasks.filter(task=>task.id!==id));
  }; //Deletes a task by filtering it out.

  const toggleComplete = (id) =>{
    setTasks(tasks.map(task=>
      task.id===id?{...task,completed:!task.completed}:task
    )); //Toggles the completed status of a task.
  };

  



  return (
    <div className="App">
        <h1>TaskTrackr</h1>
        {/* <TaskForm addTask={addTask}/> */}
        <TaskForm saveTask={saveTask} editingTask={editingTask}/>
        <TaskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} setEditingTask={setEditingTask}/>
        
    </div>
  );
}

export default App;
