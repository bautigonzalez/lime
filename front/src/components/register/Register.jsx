import React from "react"

export default ({ handleSubmit, usernameChange, passwordChange })=> {
return (

    <div className = "savbar">

         <h3>Register</h3>
          <form className= "row" onSubmit={handleSubmit}>
            <div className= "col-md-3">
            <input className= "form-control" type= "email" placeholder= "Email" label="Registrar Email"
            onChange={usernameChange} />
            </div>
            <div>
            <input className= "form-control" type= "password" placeholder= "Password" label="Registrar Password"
            onChange={passwordChange} />
            </div>
            <div>
            <button className="btn btn-primary" type="submit">login</button>
            </div>
          </form>

    </div>
)
}