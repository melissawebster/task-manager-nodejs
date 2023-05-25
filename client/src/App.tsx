import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'

function App(): JSX.Element {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.log(error));
  }, []);

  return (
    <body>

      <div className="container text-center border">
      <h1>Task Manager</h1>
      </div>

      <div className="container text-center border">
        {data ? (
          <ul>
            {data.map((task: any) => (
              <li>{task.titulo}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="container text-center border">
        <button className="btn btn-primary">Adicionar +</button>
      </div>

    </body>
  );
}

export default App;



/*
import { useState } from 'react'
import Task from './components/task'
import './App.css'

function App() {
  let [tasks, setTasks] = useState([])

  const addTask = () => {
    const name = prompt('Task name: ')
    const newTask = {
      id: Math.floor(1000 * Math.random() + 1), /*generates random id number
      name,
      done: false
    }
    setTasks((currentState) => [...currentState, newTask])
  }

  const removeTask = (taskId) => {
    setTasks(currentState => (
      currentState.filter(task => task.id !== taskId)
    ))
  }

  return (
    <body>
      <main>
        <div className="header">
        <h1>Daily Planner</h1>
        </div>
        

        <div className="list">
          <h2>Tasks for today:</h2>
          <ul>
          {/*use map instead of if else, etc}
            {tasks.map(task => 
            <Task
              key={task.id}
              task={task}
              removeTask={removeTask}
            /> 
          )}
            
          </ul>
          
          <button onClick={addTask}>Add</button>
        </div>
      </main> 
    </body>
    
  )
}

export default App
*/