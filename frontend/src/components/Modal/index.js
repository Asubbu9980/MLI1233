import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const ConfirmModal = (props) => {

    const [show, setShow] = useState(true);
    const handleClose = () => props.onClose(true);
    const handleDismiss = () => props.onClose(false);

    return (
        <>
             <Modal show={show} onHide={handleDismiss} className="mt-5">
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete All</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are You Sure you want to delete All</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDismiss}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ConfirmModal