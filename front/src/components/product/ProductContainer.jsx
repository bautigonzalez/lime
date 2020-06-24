import React from 'react';
import Product from "./Product"
import { connect } from "react-redux"
import { fetchProduct } from "../../action-creator/Products"

class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.id)
    }

    render() {
        return <Product product={this.props.product} />
    }
}

const mapStateToProps = function (state, ownProps) {
    return {
        id: ownProps.match.params.id,
        product: state.products.product
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)