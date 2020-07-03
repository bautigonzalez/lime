import React from 'react';
import Admin from "./Admin"
import { fetchUsers, setAdmin, deleteProductAdmin } from "../../action-creator/Admin"
import { connect } from "react-redux"

class UsuariosContainer extends React.Component{

    componentDidMount(){
      this.props.fetchUsers()
    }

    render(){
        return <Admin users={this.props.users} setAdmin={this.props.setAdmin}/>
    }
}

const mapStateToProps = function(state, ownProps){
  return {
    users: state.admin.users,
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    fetchUsers: ()=>dispatch(fetchUsers()),
    setAdmin: (userId, state)=>dispatch(setAdmin(userId, state)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsuariosContainer)