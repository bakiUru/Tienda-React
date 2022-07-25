import  React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Container from 'react-bootstrap/esm/Container';
import { NavBar } from './components/NavBar/NavBar';
import { ItemList } from './components/ItemList/ItemList';
import './App.css';


function App() {
const  ItemTitle = "Productos Destacados de la Semana";
   

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section className="App-body">
      <Container className='spaceContainer'>
        <ItemList ItemTitle = {ItemTitle} />
      </Container>
      </section>

 
    </div>
  );
}

export default App;
