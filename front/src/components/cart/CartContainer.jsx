import React from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import {
  fetchCart,
  deleteProduct,
  updateProduct,
  completeCart,
  addToCart,
  deleteCart
} from "../../action-creator/Cart";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartInvitado : [],
      showModal: false,
    };
    this.total = this.total.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.subtotal = this.subtotal.bind(this);
    this.mergeCart = this.mergeCart.bind(this);
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  componentDidMount() {
    if(this.props.userId !== "invitado"){
      this.mergeCart(this.props.userId)
      .then(()=>this.props.fetchCart(this.props.userId))
    }
    this.subtotal()
  }

  mergeCart(userId){
    let prod = JSON.parse(localStorage.getItem('cartInvitado'))
    let array = []
    for(let i = 0; i < prod.length; i++ ){
      array.push(this.props.addToCart(prod[i], userId))
    }
    return Promise.all(array)
  }

  subtotal(){
      let cont = 0
      let subtotales = document.getElementsByClassName("subtotal")
      for(let i = 0; i< subtotales.length; i++){
          cont += Number(subtotales[i].textContent)
      }
      document.getElementById("totalfinal").textContent = cont + " ARS"
  }

  total(products) {
    let contador = 0;
    for (let i = 0; i < products.length; i++) {
      contador += products[i].price * products[i].order.cant;
    }
    return contador;
  }

  handleChange(id, price, e) {
    document.getElementById(`total${id}`).textContent =
      Number(e.target.value) * price;
    this.props.updateProduct(id, this.props.userId, Number(e.target.value));
    this.subtotal()
  }

  handleClick(productId) {
    document.getElementById(`total${productId}`).textContent = 0
    document.getElementsByClassName(`c${productId}`)[0].className = "invisible"
    this.props.deleteProduct(productId, this.props.userId);
    this.subtotal()
  }

  handleComplete() {
    this.props.completeCart(this.props.userId);
    this.props.deleteCart()
    this.subtotal()
    this.props.history.push('/home')
  }

  closeModal() {
    this.setState({
      showModal: false,
    });
  }

  openModal() {
    this.setState({
      showModal: true,
    });
  }

  render() {
    let cart = JSON.parse(localStorage.getItem('cartInvitado'))
    return (
      <Cart
        orders={this.props.orders}
        total={this.total}
        username={this.props.username}
        handleChange={this.handleChange}
        userId={this.props.userId}
        handleClick={this.handleClick}
        handleComplete={this.handleComplete}
        cartInvitado={cart}
        openModal={this.openModal}
        closeModal={this.closeModal}
        showModal={this.state.showModal}
      />
    );
  }
}
const mapDispatchToProps = function (dispatch) {
  return {
    fetchCart: (id) => dispatch(fetchCart(id)),
    deleteProduct: (productId, userId) =>
      dispatch(deleteProduct(productId, userId)),
    updateProduct: (productId, userId, cant) =>
      dispatch(updateProduct(productId, userId, cant)),
    completeCart: (userId) => dispatch(completeCart(userId)),
    addToCart: (product, userId) => dispatch(addToCart(product, userId)),
    deleteCart: () => dispatch(deleteCart())
  };
};
const mapStateToProps = function (state, ownProps) {
  return {
    cartInvitado: state.cart.products,
    userId: ownProps.match.params.id,
    orders: state.cart.orders,
    username: state.user.loginUser.username,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
