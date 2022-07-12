import * as React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { NavBar } from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
    </div>
  );
}

export default App;
