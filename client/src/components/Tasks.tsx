import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css'

function Tasks(props): JSX.Element {
    const [data, setData] = useState<any>(null);
    const [newTask, setNewTask] = useState<string>('');

    useEffect(() => {
      fetch('http://localhost:5000/api/tasks')
        .then(response => response.json())
        .then(jsonData => setData(jsonData))
        .catch(error => console.log(error));
    }, []);  

    const handleAddTask = () => {
        const taskName = prompt('Enter the task name:');
        if (taskName) {
          setNewTask(taskName);
        }
      };

    return (
        <div>
            <div className="container-list text-center py-4">

                {data ? (
                    <ul>
                        {data.map((task: any) => (
                            <li key={task.id}>
                                <input type="checkbox" /> {task.name}
                            </li>
                        ))}
                        {newTask && (
                            <li>
                                <input type="checkbox" /> {newTask}
                            </li>
                        )}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <div className="container text-center">
                <button className="btn btn-primary" onClick={handleAddTask}>Add task</button>
            </div>
        </div>
    )
}

export default Tasks;