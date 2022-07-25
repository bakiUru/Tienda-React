import React, {Component, useEffect,useState}  from 'react';
import Container from "react-bootstrap/esm/Container";
import { Item } from "../Item/Item"
import './ItemList.css'




export function ItemList({ItemTitle}) {
  const [listItem, setListItem] = useState([]);
  let conItems = document.getElementById('contItems');
 

  const preLoader = () =>{
    document.addEventListener("DOMContentLoaded", ()=>{
      let preloader = document.createElement("<div class='loader'></div>");
      conItems.innerHTML=preloader;
    })
    
  }

useEffect(()=>{
  //preLoader();
    setTimeout(()=>{
      //Recupero la informacion de los productos
      //Colgue el archivo en mi servidor web
      fetch("https://saeriego.tech/itemsData.json")
      .then((res)=>{
        console.log(res)
         return res.json();
      }).then((json)=>{
        if(json.length === 0)
        console.log("Vacio")
       // conItems.appendChild('<p>Sin Datos</p>');
        else{
          //conItems.appendChild('<p>Sin Datos</p>');
          setListItem(json);
        }
  
      }).catch((rej)=>{
        //conItems.appendChild('<p>Error de Conexion</p>');
      })
    
      },2000)
  


},[]);


  return (
    <>
    <h3>{ItemTitle}</h3>
    <Container id='contItems' className='contListItem' >
      {listItem.map((item)=>{
       return <Item key={item.id} {...item}></Item>
      })}
    </Container>
    </>
  );
}
