import React from 'react';
import Product from "./Product"
import { connect } from "react-redux"
import { fetchReviews } from "../../action-creator/Reviews"
import { fetchProduct } from "../../action-creator/Products"
import { addToCart } from "../../action-creator/Cart"

class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            alerta:false
        }
    }


    componentDidMount() {
        this.props.fetchProduct(this.props.id)
        this.props.fetchReviews(this.props.id)
    }

    render() {
        return <Product reviews={this.props.reviews} product={this.props.product} addToCart={this.props.addToCart} userId={this.props.userId} />
    }
}

const mapStateToProps = function (state, ownProps) {
    return {
        id: ownProps.match.params.id,
        product: state.products.product,
        userId: state.user.loginUser.id,
        reviews: state.reviews.reviews
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id)),
        addToCart: (product, userId) => dispatch(addToCart(product, userId)),
        fetchReviews: (productId) => dispatch(fetchReviews(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)