import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navbar from "./Navbar"
import { deslogueandome } from "../../../action-creator/Users"
import { connect } from "react-redux"
import { withRouter } from "react-router"

const mapStateToProps = function(state, ownProps){
    return {
        userId: state.user.loginUser.id,
        username: state.user.loginUser.username,
    }
}

const mapDispatchToProps = function(dispatch, ownProps){
    return {
        deslogueandome: ()=>dispatch(deslogueandome())
    }
}

class NavbarContainer extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
        return (<Navbar userId={this.props.userId} username={this.props.username} deslogueandome={this.props.deslogueandome}/>)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarContainer))