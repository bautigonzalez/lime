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

const mapStateToProps = function(state){
     const searchP = state.navbar.search.toLowerCase()
  return { //mas o menos asi
    products : searchP.length ? state.products.products.filter(product => product.name.toLowerCase().includes(searchP)) : state.products.products,
    search : state.navbar.search
  }
}

const mapDispatchToProps = function(dispatch){
    return{
        fetchProducts: (name)=>dispatch(fetchProducts(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)