import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ProductsContainer from "../products/ProductsContainer";
import ProductContainer from "../product/ProductContainer";
import NavbarContainer from "../common/navbar/NavbarContainer";
import RegisterContainer from "../register/RegisterContainer";
import LoginContainer from "../login/LoginContainer";
import CartContainer from "../cart/CartContainer";
import UsersContainer from "../users/UsersContainer";
import ReviewsContainer from "../reviews/ReviewsContainer";
import PresentacionContainer from "../common/presentation/PresentacionContainer";
import Footer from "../common/footer/Footer";
import Contact from "../common/extrasFooter/contacs";
import Chat from '../common/chatTest/chatContainer'
import Developers from "../common/extrasFooter/developers";
import { authenticate } from "../../action-creator/Users"
import { connect } from 'react-redux'
import PublicarContainer from '../publicar/PublicarContainer'
import {
  fetchCart,
  addToCart
} from "../../action-creator/Cart";
import AdminContainer from "../admins/AdminContainer";

const mapStateToProps = function (state, ownProps) {
  return {
    username: state.user.loginUser.username,
    userId: state.user.loginUser.id,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    authenticate: () => dispatch(authenticate()),
    addToCart: (product, userId) => dispatch(addToCart(product, userId))
  };
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.mergeCart = this.mergeCart.bind(this);
  }
  
  componentDidMount() {
    this.props.authenticate();
    if (this.props.userId ? true : false) {
      this.mergeCart(this.props.userId)
    }
  }

  mergeCart(userId) {
    let prod = JSON.parse(localStorage.getItem('cartInvitado'))
    let array = []
    for (let i = 0; i < prod.length; i++) {
      array.push(this.props.addToCart(prod[i], userId))
    }
    return Promise.all(array)
  }

  render() {
    return (
      
      <div id="main">
        <NavbarContainer />
        <Switch>
          <Route exact path="/" component={PresentacionContainer} />
          <Route exact path="/home" component={PresentacionContainer} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/developers" component={Developers} />
          <Route exact path="/products" component={ProductsContainer} />
          <Route exact path="/product/:id" component={ProductContainer} />
          <Route path="/user/register" component={RegisterContainer} />
          <Route path="/user/login" component={LoginContainer} />
          <Route path="/user/:id/cart" component={CartContainer} />
          <Route path="/user/:id/profile" component={UsersContainer} />
          <Route path="/product/:id/review" component={ReviewsContainer} />
          <Route path="/admin/product" component={PublicarContainer} />
          <Route path="/admin/users" component={AdminContainer} />
          <Redirect from="/" to="/home" />
        </Switch>
        <Chat/>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
