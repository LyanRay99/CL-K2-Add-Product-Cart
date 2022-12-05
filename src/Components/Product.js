import React from 'react'

export default class Product extends React.Component {

    render() {
        return (
            <div className='product'>
                {
                    this.props.product.map((item, index) => (
                        <div className='product__box' key={index}>
                            <div className='product__box__image'>
                                <img src={item.hinhAnh} alt={index} />
                            </div>

                            <div className='product__box__info'>
                                <p>{item.tenSP}</p>
                                <p>{item.giaBan.toLocaleString()}</p>
                            </div>

                            <div className='product__box__btn'>
                                <button
                                    onClick={() => this.props.changePhone(item)}>
                                    See Details
                                </button>

                                <button onClick={() => this.props.addCart(item)}>
                                    Add Cart
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}