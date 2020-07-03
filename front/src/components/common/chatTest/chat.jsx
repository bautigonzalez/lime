import React from "react"
import './chat.css'
import '@material-ui/core/Icon'

export default ({ name, handleChange, handleChangeName, handleSubmit, handleSubmitName, sendMessage , sendUsername, value,mostrarChat})=>{
    console.log(name)
    return (

      
        <div className="float" >
            <a onClick={mostrarChat}><span class="material-icons" style={{marginTop:"20px"}}>chat_bubble_outline</span></a>
        <div className="chat invisible" id="chat">
            <p id="nombre" onClick={mostrarChat}>CHAT LIME</p>
     
            <div id="mensaggeContainer">
                <ul id="messages">

                </ul>
            </div>
                <form onSubmit={handleSubmit} id="formMensaje">
                    <input id="message" onChange={handleChange} type="text" value={value}></input>
                    <button class="btn btn-outline-secondary" id="botonn" onClick={()=>{
                        name? (sendUsername(name.split(" ")[0])) : (sendUsername("invitado"))
                        sendMessage()
                    }} type="submit"><span style={{position:"relative" ,left:"2px",bottom:"-4px" }}  class="material-icons" >
                    send
                    </span></button>
                </form>
        </div>
        </div>

        
    )
}