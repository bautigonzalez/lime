import React from 'react'
import { connect } from 'react-redux'
import Cart from './Cart'
import { fetchCart } from '../../action-creator/Cart' 

class CartContainer extends React.Component {
constructor(props) {
    super(props)
    this.total = this.total.bind(this)
    }

componentDidMount() {
    this.props.fetchCart(this.props.userId)
    }

total(products){
    let contador = 0
    for(let i =0 ; i< products.length;i++){
        contador += products[i].price 
    }
    return contador
}

render () {
    return ( 
    <Cart 
    orders={this.props.orders}
    total ={this.total}
    username= {this.props.username}
    /> 
    )
}

}
const mapDispatchToProps = function(dispatch, ownProps){
    return {
        fetchCart: (id)=>dispatch(fetchCart(id))
    }
 }
 const mapStateToProps = function (state, ownProps) {
    return {
        userId: ownProps.match.params.id,
        orders: state.cart.orders,
        username: state.user.loginUser.username
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)