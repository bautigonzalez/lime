import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navbar from "./Navbar"
import { deslogueandome } from "../../../action-creator/Users"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { searching } from '../../../action-creator/Navbar'


class NavbarContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            input : ""
        }
        this.handlerChange = this.handlerChange.bind(this)
        this.handlerSubmit = this.handlerSubmit.bind(this)

    } //vemos que captura el input 
    handlerChange(evt) {
        const value = evt.target.value
        console.log("i am handling change: ", value)
        this.setState({ input : value })
    }

    handlerSubmit() { 
        event.preventDefault()
        this.props.searching(this.state.input)
        .then(() => {
            return this.props.history.push("/products");
          });
    }
    render(){

        return (<Navbar 
            userId={this.props.userId} 
            username={this.props.username} 
            handlerChange={this.handlerChange} 
            handlerSubmit={this.handlerSubmit}
            deslogueandome={this.props.deslogueandome}
            />)
    }
}

const mapStateToProps = function(state, ownProps){
    return {
        userId: state.user.loginUser.id,
        username: state.user.loginUser.username,
        
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        searching : (search) => {
            dispatch (searching(search))

        },
        deslogueandome: ()=>dispatch(deslogueandome())


    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarContainer))