import React, {useState} from 'react';

import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';
import './DetailItem.css'

function DetailModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.nameTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Detalle del Producto</h4>
        <p>
          {props.description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <NavLink to={`/detalles/${props.id}`}  className='btn btn-primary'>Ver Producto
        </NavLink>
        <Button onClick={props.onHide}>Cerrar</Button>
        
    
      </Modal.Footer>
    </Modal>
  );
}

export function DetailItem({nameTitle , description, id}){
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
    
        <Container className='contDtl'>
                    <Button id="detailBtn" variant="primary" className="detailBtn" onClick={() => setModalShow(true)}>Detalles</Button>

        </Container>

        <DetailModal 
        id={id}
        nameTitle={nameTitle}
        description={description}
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        </>
    );
}
