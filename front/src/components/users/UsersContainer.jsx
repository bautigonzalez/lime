import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {fetchHistoryCart} from "../../action-creator/Cart";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchHistoryCart(this.props.userId);
    }

    render() {
        return (
            <Users user={this.props.user} userId={this.props.userId} carts={this.props.carts}/>
        );
    }
}
const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchHistoryCart: (id) => dispatch(fetchHistoryCart(id)),
    };
};
const mapStateToProps = function (state, ownProps) {
    return {
        userId: ownProps.match.params.id,
        user: state.user.loginUser,
        carts: state.cart.carts
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
