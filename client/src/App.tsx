import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Tasks from './components/Tasks';
import './App.css'

function App(): JSX.Element {

  return (

    <body>

      <div className="container-header text-center py-3">
        <h1>Task Manager</h1>
      </div>

      < Tasks />

    </body>

  );
}

export default App;