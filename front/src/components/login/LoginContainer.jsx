import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import { logueandome } from '../../action-creator/Users' 

class LoginContainer extends React.Component {
constructor(props) {
    super(props)
    this.state = {
        username : "",
        password : "",
      }
      this.usernameChange = this.usernameChange.bind(this)
      this.passwordChange = this.passwordChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
usernameChange (evt) {
const value = evt.target.value
this.setState ({ username: value})
}
passwordChange(evt) {
    const value = evt.target.value
    this.setState ({ password: value})
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
        handleSubmit={this.handleSubmit}
        /> )
}

}
const mapDispatchToProps = function(dispatch, ownProps){
    return {
        logueandome: (username, password)=>{
            dispatch(logueandome(username, password))
            .then(()=>{
                 ownProps.history.push("/")
            })
        }
    }
 }
export default connect(null,mapDispatchToProps)(LoginContainer)