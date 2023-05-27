import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css'

function Tasks(props): JSX.Element {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
      fetch('http://localhost:5000/api/tasks')
        .then(response => response.json())
        .then(jsonData => setData(jsonData))
        .catch(error => console.log(error));
    }, []);  

    return (
        <div>
            <div className="container-list text-center py-3">

                {data ? (
                    <ul>
                    {data.map((task: any) => (
                        <li>{task.name}</li>
                    ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <div className="container text-center">
                <button className="btn btn-primary">Adicionar +</button>
            </div>
        </div>
    )
}

export default Tasks;