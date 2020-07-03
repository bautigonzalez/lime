import React from 'react';
import Product from "./Product"
import { connect } from "react-redux"
import { fetchReviews, updateValoration } from "../../action-creator/Reviews"
import { fetchProduct } from "../../action-creator/Products"
import { addToCart } from "../../action-creator/Cart"
import { deleteProductAdmin } from "../../action-creator/Admin"

class ProductContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valoration : 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.promReviews = this.promReviews.bind(this)
    }


    componentDidMount() {
        this.props.fetchProduct(this.props.id)
        this.props.fetchReviews(this.props.id)
        .then(()=>this.promReviews(this.props.reviews))
    }

    promReviews(reviews) {
        let cont = 0
        let prom = 0
        for(let i = 0; i < reviews.length; i++){
            prom += reviews[i].stars
            cont++
        }
        this.props.updateValoration(Math.round(prom/cont), this.props.product.id )
        this.setState({valoration: Math.round(prom/cont) })
    }

    handleClick(productId) {
        return this.props.deleteProductAdmin(productId)
    }

    render() {
        return <Product productId={this.props.id} handleClick={this.handleClick} state= {this.props.state} reviews={this.props.reviews} product={this.props.product} valoration={this.state.valoration} addToCart={this.props.addToCart} userId={this.props.userId} />
    }
}

const mapStateToProps = function (state, ownProps) {
    return {
        id: ownProps.match.params.id,
        product: state.products.product,
        userId: state.user.loginUser.id,
        reviews: state.reviews.reviews,
        state: state.user.loginUser.state,
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id)),
        addToCart: (product, userId) => dispatch(addToCart(product, userId)),
        fetchReviews: (productId) => dispatch(fetchReviews(productId)),
        deleteProductAdmin: (productId) => dispatch(deleteProductAdmin(productId))
        updateValoration: (valoration, productId) => dispatch(updateValoration(valoration, productId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)