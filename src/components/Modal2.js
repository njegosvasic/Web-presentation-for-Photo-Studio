import React from 'react'
import {Modal, Image} from 'react-bootstrap';

const Modal2 = ({imgsrc,show,handleClose}) => {
    return (
        <Modal className='galerija5' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><Image src={imgsrc} fluid /></Modal.Body>
      </Modal>
    )
}

export default Modal2
