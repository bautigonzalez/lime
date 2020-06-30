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
        this.logout = this.logout.bind(this)
        this.handleClick = this.handleClick.bind(this)


    } //vemos que captura el input 
    handlerChange(evt) {
        const value = evt.target.value
        console.log("i am handling change: ", value)
        this.setState({ input : value })        
    }

    handlerSubmit() { 
        event.preventDefault()
        this.props.searching(this.state.input)
        this.setState({input:""})
        return this.props.history.push("/products");
    }

    handleClick(category) {
        this.props.searching(category)
        this.props.history.push("/products")
    }

    logout(){
        this.props.deslogueandome()
        return this.props.history.push("/");

    }
    render(){

        return (<Navbar 
            userId={this.props.userId} 
            username={this.props.username} 
            handlerChange={this.handlerChange} 
            handlerSubmit={this.handlerSubmit}
            deslogueandome={this.logout}
            handleClick={this.handleClick}
            value={this.state.input}
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
        searching : (search) =>dispatch (searching(search))
        ,
        deslogueandome: ()=>dispatch(deslogueandome())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarContainer))