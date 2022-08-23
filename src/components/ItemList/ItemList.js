import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Container from "react-bootstrap/esm/Container";
import { Item } from "../Item/Item";
import "./ItemList.css";
import { FilterBtn } from "../FilterBtn/FilterBtn";
import { useNavigate } from "react-router-dom";
import {getFirestore, getDocs, query, where, collection} from 'firebase/firestore'

//Guardo Las categorias en el localStorage para capturarla renderizarla con el boton filtrar, si se agrega 
//otro producto a la BD con una nueva categoria la podria renderizar
const catchCategory = (data) => {
  let dataCategory = data.docs.map((cat) => cat.category);
  let dataCatUnique = [...new Set(dataCategory)];

  //Guardo la info en local storage
  localStorage.setItem("category", dataCatUnique);
};



export function ItemList({ ItemTitle, countCart }) {
  const [listItem, setListItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  
  
  const navigate = useNavigate();
  
  useEffect(() => {
    //firebase
    const db = getFirestore()
    const itemsCollection = collection(db,'items');
    
    
    if (categoryId)
    {
      const q = query(itemsCollection, where('category', '==' , categoryId))
      setLoading(true);
      getDocs(q)
      .then((snapshot)=>{

        setListItem(snapshot.docs.map((doc)=>({ ...doc.data(), id: doc.id})
        
      ))
      }).catch((error)=>{
        setListItem([])
        console.log('NO hubo conexion',error)
      })
      .finally(()=> setLoading(false))
      
    } 
   else{
      setLoading(true);
      getDocs(itemsCollection)
      .then((snapshot)=>{
        setListItem(snapshot.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
        //catchCategory(snapshot) TODO CATEGORIA DINAMICA
      }).catch((error)=>{
        setListItem([])
        console.log('NO hubo conexion de Items',error)
      })
      .finally(()=> setLoading(false))
    }
  }, [categoryId]);



  const gotoItem =(id)=> navigate(`/detalles/${id}`);


  function Titulo() {
    if (categoryId !== "/")
      return <h3 className="titlePage">{categoryId}</h3>;
    else return <></>;
  }

  return (
    <>
      <h3 className="titlePage">{ItemTitle}</h3>
      
      
      {loading? (
        <div className="contLoading"> 
        <Spinner animation="border" variant="warning" />
        </div>
       
      ) : (
        <>
        <Titulo></Titulo>
        <FilterBtn/>
        <br>
        </br>
        <br>
        </br>
          <div id="contItems"></div>
          <Container className="contListItem">
            {listItem.map((item) => {
              return (
                <Item gotoItem={()=>gotoItem(item.id)} countCart={countCart} key={item.id} {...item}></Item>
              );
            })}
          </Container>
        </>
      )}
    </>
  );
}
