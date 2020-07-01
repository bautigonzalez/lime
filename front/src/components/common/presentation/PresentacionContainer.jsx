import React from 'react';
import { connect } from "react-redux"
import { withRouter } from "react-router"
import Presentacion from './Presentacion';
import {
    fetchCart,
    addToCart
} from "../../../action-creator/Cart";

const mapStateToProps = function (state, ownProps) {
    return {
        username: state.user.loginUser.username,
        userId: state.user.loginUser.id,
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        addToCart: (product, userId) => dispatch(addToCart(product, userId))
    };
};

class PresentacionContainer extends React.Component{

    constructor(props) {
        super(props);
        this.mergeCart = this.mergeCart.bind(this);
    }

    componentDidMount() {
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
   


    render(){

        return (<Presentacion 
                username={this.props.username} 
                />)
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PresentacionContainer))