import React from 'react'
import './Tools/fontawasome'
import './Styles/style.scss'
import DataProduct from './Data/DataPhone.json'
import Product from './Components/Product'
import { ModalCart } from './Components/Modal'
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productCurrent: {
        id: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./Assets/iphone-13-pro.jpg"
      },

      productCart: []
    }
  }

  // * Function see detail product (show in table below)
  changePhone = (newProduct) => {
    this.setState(
      this.state = {
        productCurrent: newProduct
      }
    )
  }

  // * Function add product into cart
  addCart = (item) => {
    this.setState(
      this.state.productCart = [
        ...this.state.productCart, item
      ]
    )
  }

  render() {
    return (
      <section>
        <ModalCart productCart={this.state.productCart} />

        <Product
          product={DataProduct}
          changePhone={this.changePhone}
          addCart={this.addCart} />

        <div className='infoPhone'>
          <div className='infoPhone__demo'>
            <h2 className='infoPhone__demo__title'>{this.state.productCurrent.tenSP}</h2>
            <div className='infoPhone__demo__image'>
              <img src={this.state.productCurrent.hinhAnh} alt={this.state.productCurrent.tenSP} />
            </div>
          </div>

          <div className='infoPhone__info'>
            <table>
              <tbody>
                <tr>
                  <td>Screen</td>
                  <td>{this.state.productCurrent.manHinh}</td>
                </tr>
                <tr>
                  <td>He dieu hanh</td>
                  <td>{this.state.productCurrent.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>camera truoc</td>
                  <td>{this.state.productCurrent.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Cammera sau</td>
                  <td>{this.state.productCurrent.cameraSau}</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>{this.state.productCurrent.ram}</td>
                </tr>
                <tr>
                  <td>Rom</td>
                  <td>{this.state.productCurrent.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section >
    )
  }
}