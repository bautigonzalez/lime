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
        console.log("search: ", this.props.search)

        return <Products products={this.props.products}/>
    }
}

const mapStateToProps = function(state, ownProps){
     const searchP = state.navbar.search
  return { //mas o menos asi
    products : searchP.length ? state.products.products.filter(product => product.name.includes(searchP)) : state.products.products,
    search : state.navbar.search
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
    return{
        fetchProducts: (name)=>dispatch(fetchProducts(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)