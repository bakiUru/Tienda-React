import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const handleCategory=()=>{
    console.log("click")
}

export function FilterBtn() {
  return (
    <DropdownButton
      align="start"
      title="Filtrar"
      id="dropdown-menu-align-end"
    onClick={handleCategory}>
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>
  );
}

