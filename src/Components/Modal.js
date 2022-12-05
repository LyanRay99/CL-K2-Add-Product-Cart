import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPlus, faSubtract, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../Styles/style.scss'

export const ModalCart = (props) => {
    const [show, setShow] = useState(false);
    const [productCartModal, setProductCartModal] = useState([])

    useEffect(() => {
        setProductCartModal(props.productCart)
    })

    const increaseAmount = (item, index) => {
        let incrAmount = item.soLuong + 1
        setProductCartModal(
            productCartModal[index].soLuong = incrAmount
        )
    }

    const decreaseAmount = (item, index) => {
        let incrAmount = item.soLuong - 1
        if (incrAmount >= 0) {
            setProductCartModal(
                productCartModal[index].soLuong = incrAmount
            )
        }
    }

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
                <span> </span>
                {props.showAmount(props.productCart)}
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
                                        <p>Name Product: {item.tenSP}</p>
                                        <p>Price: {item.giaBan.toLocaleString()}</p>
                                        <p>Totals: {(item.giaBan * item.soLuong).toLocaleString()}</p>
                                    </div>

                                    <div className='box__amount'>
                                        <div className='box__amount__incrDecr'>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faPlus}
                                                    className='icon'
                                                    onClick={() => increaseAmount(item, index)} />
                                            </span>

                                            <p>Amount: {item.soLuong}</p>

                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faSubtract}
                                                    className='icon'
                                                    onClick={() => decreaseAmount(item, index)} />
                                            </span>
                                        </div>

                                        <div
                                            className='box__amount__trash'
                                            onClick={() => props.deleteCart(item)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </div>
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
