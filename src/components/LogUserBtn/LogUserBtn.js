import * as React from "react";
import Button from "react-bootstrap/Button";
import './LogUserBtn.css';


export function LogUserBtn() {
  return (
    <>
      <div className="logBtn">
        <Button variant="outline-primary" size="sm">
          Loggin
        </Button>{" "}
        <Button variant="outline-warning" size="sm">
          Sing Up
        </Button>{" "}       
      </div>
    </>
  );
}
