import React, { Component } from 'react'
import { storeProducts, detailProduct } from '../../data'


const ProductContext = React.createContext()

//Provider
//Consumer

class ProductProvider extends Component {
  state= {
    products: [],
    detailProduct,
    cart: [],
    modelOpen: false,
    modelProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    inCart: true
  }

  increment = (id) => {
    let tempCart = [...this.state.cart];
    let selectedProduct = tempCart.find(item => item.id === id)

    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    product.count = product.count + 1
    product.total = product.count * product.price
   
    // this.setState({ cart: [...tempCart] }, () => {this.addTotal()});
    // console.log(' index ', product);
    this.setState({ cart: [...tempCart] }, () => {this.addTotal()});
  }

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    let selectedProduct = tempCart.find(item => item.id === id)

    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    product.count = product.count - 1
    // this.setState({ cart: [...tempCart] }, () => {this.addTotal()});
    if(product.count === 0){
      this.removeItem(id)
    }
    else{
      product.total = product.count * product.price
      this.setState({ cart: [...tempCart] }, () => {this.addTotal()});
      }
    // console.log(' index ', product);
  }

  removeItem = (id) => {
    let tempProduct = [...this.state.products]
    let tempCart = [...this.state.cart]
    
    tempCart = tempCart.filter(i => i.id !== id)

    const index = tempProduct.indexOf(this.getItem(id))
    let remove = tempProduct[index]
    remove.inCart = false;
    remove.count = 0;
    remove.total = 0;
    this.setState({ cart: [...tempCart], products: [...tempProduct] }, () => {
      this.addTotal()
    });
  }
  
  
  addTotal = () => {
    let subTotal = 0
    this.state.cart.map(item => subTotal += item.total)
    const tempTax = (subTotal * 0.1)
    const total = subTotal + tempTax
    this.setState({ cartSubTotal: subTotal, cartTax: tempTax, cartTotal: total });
  }

  componentDidMount() {
    this.setProducts()
  }
  setProducts = () => {
    let products = []
    storeProducts.map(i => {
      const single = {...i}
      products = [...products, single]
    })
    this.setState({ products });
  }
  
  clearCart = () => {
    // e.preventdefault()
    this.setState({ cart: [] }, () => {
      this.setProducts();
      this.addTotal()
    });
  }

  getItem = (id) => {
    const product = this.state.products.find(i => i.id === id )
    return product
  }
  
  handleDetail = (id) => {
    // console.log('hello detail');
    const product = this.getItem(id)
    this.setState({ detailProduct: product });
  }
  addTocart = (id) => {
    // console.log(`hello add to CART.id is ${id}`);
    let tempProduct = [...this.state.products]
    const index = tempProduct.indexOf(this.getItem(id))
    const product = tempProduct[index]
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState({ products: tempProduct, cart: [...this.state.cart, product] }, () => this.addTotal()
    );
  }
  openModel = (id) => {
    const product = this.getItem(id)
    this.setState({ modelProduct: product,modelOpen: true });
  }
  closeModel = () => {
    this.setState({ modelOpen: false });
  }
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addTocart: this.addTocart,
        openModel: this.openModel,
        closeModel: this.closeModel,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}


const ProductConsumer = ProductContext.Consumer;

export {
  ProductProvider,
  ProductConsumer
}