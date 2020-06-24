import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navbar from "./Navbar"
//import { buscarPeliculas } from "../action-creators/peliculas"
//import { deslogueandome } from "../action-creators/user"
import { connect } from "react-redux"
import { withRouter } from "react-router"

const mapStateToProps = function(state, ownProps){
    return {
        userId: state.user.loginUser.id,
        username: state.user.loginUser.username,
    }
}
class NavbarContainer extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
        return (<Navbar userId={this.props.userId} username={this.props.username} />)
    }
}

export default withRouter(connect(mapStateToProps, null)(NavbarContainer))