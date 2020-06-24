import React from 'react';
import Products from "./Products"
import { connect } from "react-redux"
import { fetchProducts } from "../../action-creator/Products"

class ProductsContainer extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchProducts()
    }

    render(){
        return <Products products={this.props.products}/>
    }
}

const mapStateToProps = function(state, ownProps){
  return {
    products : state.products.products
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
    return{
        fetchProducts: ()=>dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)