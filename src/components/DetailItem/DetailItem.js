import React, {useEffect,useState} from 'react';
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import './DetailItem.css'

export function DetailItem({description}){

    return (
        <Container className='contDtl'>
                    <Button id="detailBtn" variant="primary" className="detailBtn" >Detalles</Button>

        </Container>
    );
}
