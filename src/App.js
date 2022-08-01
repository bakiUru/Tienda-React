import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemList } from "./components/ItemList/ItemList";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import titleData from "../src/assests/Utils/title.json";
import "./App.css";

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <section className="App-body">
          <Container className="spaceContainer">
            <Routes>
              
              <Route
                extact
                path="/"
                element={<ItemList ItemTitle={titleData.titles.top} />}
              />
              <Route
                extact
                path="/sae"
                element={<ItemList ItemTitle={titleData.titles.sae} />}
              />
              <Route
                extact
                path="/info"
                element={<ItemList ItemTitle={titleData.titles.info} />}
              />
              <Route
                extact
                path="/service"
                element={<ItemList ItemTitle={titleData.titles.serv} />}
              />
              <Route
                extact
                path="/items"
                element={<ItemList ItemTitle={titleData.titles.items} />}
              />
              <Route
                extact
                path="/detalles/:itemId"
                element={<ItemDetailContainer/>}
              />

              <Route
                exact
                path="*"
                element={<ItemList ItemTitle={titleData.titles.top} />}
              />
            </Routes>
          </Container>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
