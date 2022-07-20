import * as React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Container from 'react-bootstrap/esm/Container';
import { NavBar } from './components/NavBar/NavBar';
import { ItemList } from './components/ItemList/ItemList';
import './App.css';




function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      
      <section className="App-body">
      <Container className='spaceContainer'>
        <ItemList />
      </Container>
      </section>

 
    </div>
  );
}

export default App;
