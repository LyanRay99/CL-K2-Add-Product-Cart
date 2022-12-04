import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../Styles/style.scss'

export const ModalCart = (props) => {
    const [show, setShow] = useState(false);

    return (
        <>
            {/* Custom modal */}
            <style type='text/css'>
                {
                    `
                        .btn-primary {
                            background-color: orange;
                            border: none;
                        }
                    `
                }
            </style>

            <Button variant="primary" onClick={() => setShow(true)}>
                <FontAwesomeIcon className='icon' icon={faCartShopping} />
                (0)
            </Button>

            <Modal
                size='md'
                show={show}
                onHide={() => setShow(false)}
                className="modal-90w"
                aria-labelledby="example-custom-modal-styling-title">

                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        My Total Products
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {
                        props.productCart.length !== 0 ? (
                            props.productCart.map((item, index) => (
                                <div className='box' key={index}>
                                    <div className='box__image'>
                                        <img src={item.hinhAnh} alt={item.tenSP}></img>
                                    </div>

                                    <div className='box__info'>
                                        <p>{item.tenSP}</p>
                                        <p>{item.giaBan}</p>
                                    </div>

                                    <div className='box__amount'>
                                        <p>Amount: 1</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>Your Cart hasn't product. Let buy now!</div>
                        )
                    }
                </Modal.Body>
            </Modal>
        </>
    );
}
