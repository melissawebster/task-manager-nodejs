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

      <div className="container-header text-center py-3">
      <h1>Task Manager</h1>
      </div>

      <div className="container-list text-center py-3">
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

      <div className="container text-center">
        <button className="btn btn-primary">Adicionar +</button>
      </div>

    </body>
  );
}

export default App;