import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import './FilterBtn.css'

const handleCategory = () => {
  let category = localStorage.getItem("category");
  category = category.split(",");
return category
};

export function FilterBtn() {
  const [categor, setCategor] = useState(handleCategory);
  const [valueCat, setValueCat] = useState(handleCategory);

  const hadleSelection= () =>{

  }
console.log(categor)
  useEffect(() => {
       
  }, [categor]);

  return (
    
    <DropdownButton align="start" title="Filtrar" id="dropdown-menu-align-end">
      <select>
      <option>Selecciones un Opcion</option>
     
      {
          categor.map((cat, index) => 

            <option className="optionSelect" key={index} value={cat}>{cat}</option>
          )


      }
      </select>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="Servicios">Servicios</Dropdown.Item>
    </DropdownButton>
  );
}
