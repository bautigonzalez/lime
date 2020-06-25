import React from 'react';
import Product from "./Product"
import { connect } from "react-redux"
import { fetchProduct } from "../../action-creator/Products"
import { addToCart } from "../../action-creator/Cart"

class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.id)
    }

    render() {
        return <Product product={this.props.product} addToCart={this.props.addToCart} userId={this.props.userId} />
    }
}

const mapStateToProps = function (state, ownProps) {
    return {
        id: ownProps.match.params.id,
        product: state.products.product,
        userId: state.user.loginUser.id
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id)),
        addToCart: (product, userId) => dispatch(addToCart(product, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)