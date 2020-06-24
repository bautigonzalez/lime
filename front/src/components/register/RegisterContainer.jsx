import React from "react";
import { connect } from "react-redux";
import Register from "./Register";
import { registrandome } from "../../action-creator/Users";

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      address: "",
      image: "",
    };
    this.usernameChange = this.usernameChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  usernameChange(evt) {
    const value = evt.target.value;
    this.setState({ username: value });
  }
  passwordChange(evt) {
    const value = evt.target.value;
    this.setState({ password: value });
  }
  nameChange(evt) {
    const value = evt.target.value;
    this.setState({ name: value });
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
    this.props.registrandome(this.state.username, this.state.password);
  }

  render() {
    return (
      <Register
        usernameChange={this.usernameChange}
        passwordChange={this.passwordChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    registrandome: (username, password) => {
      dispatch(registrandome(username, password)).then(() => {
        ownProps.history.push("/");
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(RegisterContainer);
