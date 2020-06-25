import React from 'react'
import { connect } from 'react-redux'
import Cart from './Cart'
import { fetchCart } from '../../action-creator/Cart' 

class CartContainer extends React.Component {
constructor(props) {
    super(props)
    }

componentDidMount() {
    console.log(this.props.userId)
        this.props.fetchCart(this.props.userId)
    }


render () {
    return ( 
    <Cart 
    orders={this.props.orders}
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
        orders: state.cart.orders
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)