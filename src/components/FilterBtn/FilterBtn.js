import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { NavLink } from "react-router-dom";
import "./FilterBtn.css";


const handleCategory = () => {
  let category = localStorage.getItem("category");
  console.log(category)
  if (category == null)
   { category = [];
      
   }
  else category = category.split(",");
  return category;
};

export function FilterBtn() {
  const [categor, setCategor] = useState(handleCategory);
  const [valueCat, setValueCat] = useState("");


  const handleSelection = (e) => {
    let elemnt = e.target;
    setValueCat(elemnt.getAttribute("value"));
    console.log(elemnt.getAttribute("value"));
    
  };

  useEffect(() => {
    
  }, [valueCat]);

  return (
    <DropdownButton align="start" title="Filtrar" id="dropdown-menu-align-end">
      {categor.map((cat, index) => (
        <Dropdown.Item onClick={handleSelection} key={index} value={cat}>
          <NavLink to={`/category/${cat}`} className="dropdown-item">{cat}</NavLink>
        </Dropdown.Item>
      ))}

      <Dropdown.Divider />
      <Dropdown.Item eventKey="Servicios" href="/service">
        Servicios
      </Dropdown.Item>
    </DropdownButton>
  );
}
