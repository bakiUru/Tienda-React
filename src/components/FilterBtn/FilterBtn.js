import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import './FilterBtn.css'

const handleCategory = () => {
  let category = localStorage.getItem("category");
  if (category ==='') 
     document.getElementsByClassName('optionSelect').toggleAttribute("disabled", true);
  else
   category = category.split(",");
  return category
};

export function FilterBtn() {
  const [categor, setCategor] = useState(handleCategory);
  const [valueCat, setValueCat] = useState('');
  let navigate= useNavigate();
  
  const handleSelection = (e) => {
    let elemnt = e.target;
    setValueCat(elemnt.getAttribute('value'));
    alert(elemnt.getAttribute('value'))
    console.log(elemnt.getAttribute('value'))
    navigate('/category/'+valueCat, {replace: true});
  }

  useEffect(() => {
    
  }, [categor]);

  return (

    <DropdownButton align="start" title="Filtrar" id="dropdown-menu-align-end">
      
        

        {
          categor.map((cat, index) =>

            <Dropdown.Item  onClick={handleSelection} key={index} value={cat}>{cat}</Dropdown.Item>
          )


        }
    
      <Dropdown.Divider />
      <Dropdown.Item eventKey="Servicios" href='/services'>Servicios</Dropdown.Item>
    </DropdownButton>
  );
}
