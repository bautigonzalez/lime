import React from "react"
import Chat from "./chat"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import socketIOClient from "socket.io-client";
const socket = socketIOClient("https://simplechatproject.herokuapp.com/");

class ChatContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: "",
            username: ""
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.sendUsername = this.sendUsername.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmitName = this.handleSubmitName.bind(this)
        this.mostrarChat=this.mostrarChat.bind(this)
        this.setName=this.setName.bind(this)
    }

    componentDidMount(){
        const messages = $("#messages")
        socket.on("new_message", (data)=>{
            messages.append(`<li>${data.username}: ${data.message}</li>`)
        })
    }

    mostrarChat(){
        $("#chat").toggleClass("invisible")
    }

    setName(){
        this.props.name? this.setState({username:this.props.name}) : this.setState({username:"invitado"})
    }


    sendMessage(){
        if(this.state.message) socket.emit("new_message", {message : this.state.message})
    }

    sendUsername(name){
        socket.emit("change_username", {username : name})
    }

    handleChange(e){
        const value = e.target.value
        this.setState({message: value})
    }

    handleChangeName(e){
        const value = e.target.value
        this.setState({username: value})
    }

    handleSubmit(){
        event.preventDefault()
        this.setState({message:""})
    }

    handleSubmitName(){
        event.preventDefault()
    }



    render(){
        return (<Chat 
        selectRoom ={this.selectRoom}
        handleChange={this.handleChange} 
        handleChangeName={this.handleChangeName} 
        handleSubmit={this.handleSubmit} 
        handleSubmitName={this.handleSubmitName} 
        sendMessage={this.sendMessage} 
        sendUsername={this.sendUsername}
        value={this.state.message}
        mostrarChat={this.mostrarChat}
        name={this.props.name}
    
        />)
    }
} 




const mapStateToProps = function (state, ownProps) {
    
    return {

        name: state.user.loginUser.name
    }
}



export default withRouter(connect(mapStateToProps, null)(ChatContainer))