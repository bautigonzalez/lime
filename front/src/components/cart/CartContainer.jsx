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

    //this.disabledButton = this.disabledButton.bind(this)
  }

  componentDidMount() {
    this.props.fetchCart(this.props.userId);
  }

  total(products) {
    let contador = 0;
    for (let i = 0; i < products.length; i++) {
      contador += products[i].price;
    }
    return contador;
  }

  handleChange(id, price, e) {
    document.getElementById(`total${id}`).textContent =
      Number(e.target.value) * price;
    this.props.updateProduct(id, this.props.userId, Number(e.target.value));
  }

  handleClick(productId) {
    console.log("LLEGUE", productId, this.props.userId);
    this.props.deleteProduct(productId, this.props.userId);
  }

  handleComplete() {
    this.props.completeCart(this.props.userId);
    this.props.history.push('/home')
  }

  /* disabledButton(id){
    document.getElementById(`${id}`).disabled =document.getElementById(`${id}`).value
} */

  render() {
    console.log("orders", this.props.orders);
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
      />
    );
  }
}
const mapDispatchToProps = function (dispatch, ownProps) {
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
    userId: ownProps.match.params.id,
    orders: state.cart.orders,
    username: state.user.loginUser.username,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
