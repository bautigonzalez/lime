import React from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import {
  fetchCart,
  deleteProduct,
  updateProduct,
  completeCart,
} from "../../action-creator/Cart";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.total = this.total.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.subtotal = this.subtotal.bind(this);
    
  }

  componentDidMount() {
    if(this.props.userId !== "invitado") this.props.fetchCart(this.props.userId);
    
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
    this.props.history.push('/home')
  }

  /* disabledButton(id){
    document.getElementById(`${id}`).disabled =document.getElementById(`${id}`).value
} */

  render() {
    console.log("CARTINVIDADO:", this.props.cartInvitado)
    return (
      <Cart
        orders={this.props.orders}
        total={this.total}
        username={this.props.username}
        handleChange={this.handleChange}
        //disabledButton={this.disabledButton}
        //deleteProduct = {this.props.deleteProduct}
        userId={this.props.userId}
        handleClick={this.handleClick}
        handleComplete={this.handleComplete}
        cartInvitado={this.props.cartInvitado}
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
