import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import { logueandome } from '../../action-creator/Login' 

class LoginContainer extends React.component {
constructor(props) {
    super(props)
    this.state = {
        username : "",
        password : "",
        name : "",
      }
    }
usernameChange (evt) {
const value = evt.target.value
this.setState ({ username: value})
}
passwordChange(evt) {
    const value = evt.target.value
    this.setState ({ password: value})
}
nameChange(evt){
    const value = evt.target.value
    this.setState ({ name: value})
}
handleSubmit(event){
    event.preventDefault()
    this.props.logueandome(this.state.username, this.state.password)
}

render () {
    return ( 
        
        <Login 
        usernameChange={this.usernameChange} 
        passwordChange={this.passwordChange}
        nameChange={this.nameChange}
        
        /> )
}

}
const mapDispatchToProps = function(dispatch, ownProps){
    return {
     registrandome: (username, password)=>{
            dispatch(registrandome(username, password))
            .then(()=>{
                 ownProps.history.push("/")
            })
        }
    }
 }
export default connect(null,mapDispatchToProps)(LoginContainer)