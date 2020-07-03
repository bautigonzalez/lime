import React from "react";
import { connect } from "react-redux";
import Register from "./Register";
import { registrandome } from "../../action-creator/Users";

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      password: "",
      pass: "",
      address: "",
      image: "",
      alert:false,
    };
    this.usernameChange = this.usernameChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
    this.passChange = this.passChange.bind(this)
    this.nameChange = this.nameChange.bind(this)
    this.addressChange = this.addressChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  usernameChange(evt) {
    const value = evt.target.value;
    this.setState({ username: value });
  }
  nameChange(evt) {
    const value = evt.target.value;
    this.setState({ name: value });
  }
  passwordChange(evt) {
    const value = evt.target.value;
    this.setState({ password: value });
  }
   passChange(evt) {
    const value = evt.target.value
    this.setState({ pass: value });
  }

  addressChange(evt) {
    const value = evt.target.value;
    this.setState({ address: value });
  }
  imageChange(evt) {
    const value = evt.target.value;
    this.setState({ image: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password !== this.state.pass) {
      this.setState({
       alert:true
      })}
     else {
       this.props.registrandome(this.state)
     }
  }

  render() {
    return (
      <Register
      usernameChange={this.usernameChange}
      nameChange={this.nameChange}
      passwordChange={this.passwordChange}
      passChange={this.passChange}
      addressChange={this.addressChange}
      handleSubmit={this.handleSubmit}
      password={this.state.password}
      username={this.state.username}
      pass={this.state.pass}
      name={this.state.name}
      address={this.state.address}
      alert={this.state.alert}
      tipo="Registrarse"
      />
    )
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    registrandome: (data) => {
      dispatch(registrandome(data)).then(() => {
        ownProps.history.push("/");
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(RegisterContainer);
