import React from 'react';
import Products from "./Products"
import { connect } from "react-redux"
import { fetchProducts } from "../../action-creator/Products"
import { addToCart } from "../../action-creator/Cart"

class ProductsContainer extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchProducts()
    }
    
    render(){
        console.log("search: ", this.props.search)

        return <Products products={this.props.products} addToCart={this.props.addToCart} userId={this.props.userId} />
    }
}

const mapStateToProps = function (state) {
    const searchP = state.navbar.search.toLowerCase()
    return { 
        products: searchP.length ? state.products.products.filter(function (product) {
            if (product.name.toLowerCase().includes(searchP)) return true
            else if (product.category.toLowerCase().includes(searchP)) return true

        }) : state.products.products,
        search: state.navbar.search,
        userId: state.user.loginUser.id
    }
}

const mapDispatchToProps = function(dispatch){
    return{
        fetchProducts: (name)=>dispatch(fetchProducts(name)),
        addToCart: (product, userId) => dispatch(addToCart(product, userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)