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
    //* Tạo Object product chứa các thuộc tính cần thiết để hiển thị trong giỏ hàng
    let productAdded = {
      maSP: item.maSP,
      tenSP: item.tenSP,
      hinhAnh: item.hinhAnh,
      giaBan: item.giaBan,
      soLuong: 1,
    }

    //* Tìm xem mã hàng đã có trong array productCart chưa (tìm theo têh với method findIndex)
    //* Nếu chưa có thì index trả về -1, lúc này ta sẽ push nó vào array productCart
    //* Nếu có rồi thì ta set state lại số lượng của mã hàng đó
    let checkProduct = this.state.productCart.findIndex((item) => item.tenSP === productAdded.tenSP)
    if (checkProduct === -1) {
      //* Push nó vào productCart đã tạo sẵn ở trên
      this.state.productCart.push(productAdded)
    }
    else {
      this.state.productCart[checkProduct].soLuong += 1
    }

    this.setState({
      productCart: this.state.productCart
    })
  }

  // * Function delete product into cart
  deleteCart = (deleteItem) => {
    //* Check xem có tên sp trong array productCart ko
    //* Nếu ta thì ta dùng method Splice để xóa object đó khỏi array productCart
    //* Sau đó, set state lại productCart
    let checkProduct = this.state.productCart.findIndex((item) => item.tenSP === deleteItem.tenSP)
    if (checkProduct !== -1) {
      this.state.productCart.splice(deleteItem, 1)
    }

    this.setState({
      productCart: this.state.productCart
    })
  }

  // * Function hiển thị số lượng product into cart
  showAmount = (productCart) => {
    let amount = 0

    productCart.forEach((value) => {
      amount += value.soLuong
    });

    return amount;
  }

  render() {
    return (
      <section>
        <ModalCart
          productCart={this.state.productCart}
          deleteCart={this.deleteCart}
          showAmount={this.showAmount} />

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
      </section>
    )
  }
}