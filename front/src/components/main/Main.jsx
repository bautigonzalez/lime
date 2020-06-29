import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ProductsContainer from "../products/ProductsContainer";
import ProductContainer from "../product/ProductContainer";
import NavbarContainer from "../common/navbar/NavbarContainer";
import RegisterContainer from "../register/RegisterContainer";
import LoginContainer from "../login/LoginContainer";
import CartContainer from "../cart/CartContainer";
import PresentacionContainer from "../common/presentation/PresentacionContainer";
import Footer from "../common/footer/Footer";
import PRUEBA from "../cart/prueba";
import Contact from "../common/extrasFooter/contacs";
import Developers from "../common/extrasFooter/developers";
import { authenticate } from "../../action-creator/Users"
import { connect } from 'react-redux'

const mapStateToProps = function (state, ownProps) {
  return {
    username: state.user.loginUser.username
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    authenticate: () => dispatch(authenticate()),
  };
};

class Main extends React.Component {
  componentDidMount() {
    this.props.authenticate();
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
          <Route path="/product/:id" component={ProductContainer} />
          <Route path="/user/register" component={RegisterContainer} />
          <Route path="/user/login" component={LoginContainer} />
          <Route path="/user/:id/cart" component={CartContainer} />
          <Redirect from="/" to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
