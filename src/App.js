import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemList } from "./components/ItemList/ItemList";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import titleData from "../src/assests/Utils/title.json";
import { CartPage } from "./Pages/Cart/CartPage";
import "./App.css";
import { FilterBtn } from "./components/FilterBtn/FilterBtn";
import { SaePage } from "./Pages/Sae/SaePage";
import { ServicesPage } from "./Pages/Services/ServicesPage";
import { InfoPage } from "./Pages/Info/InfoPage";
import CartProvider from './Context/CartContext' 

localStorage.setItem('category','Aspersor,Accesorio,Automatismo,Valvulas,Bombas')
function App() {


  return (
    <BrowserRouter>
    <CartProvider >
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <section className="App-body">
          <Container className="spaceContainer">
            <FilterBtn/>
            <Routes>

              <Route
                extact
                path="/"
                element={<ItemList ItemTitle={titleData.titles.items} />}
              />
              <Route
                extact
                path="/sae"
                element={<SaePage/>}
              />
              <Route
                extact
                path="/info"
                element={<InfoPage />}
              />
              <Route
                extact
                path="/service"
                element={<ServicesPage  />}
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
                extact
                path="/category/:categoryId"
                element={<ItemList/>}
              />
                            <Route
                extact
                path="/cart"
                element={<CartPage/>}
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
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;