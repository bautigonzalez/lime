import React from 'react';
import { connect } from "react-redux"
import { withRouter } from "react-router"
import Presentacion from './Presentacion';



class PresentacionContainer extends React.Component{

    constructor(props){
        super(props)
        
    } 
   


    render(){

        return (<Presentacion 
                username={this.props.username} 
                />)
    }
}

const mapStateToProps = function(state){
    return {
        username: state.user.loginUser.username,
        
    }
}

export default withRouter(connect(mapStateToProps)(PresentacionContainer))