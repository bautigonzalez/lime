import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'

class Navbar extends React.component {
constructor(props) {
    super(props);
    this.state = {
        value: "",
        invalidLength: true,
        hasChanged: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    }
    handleChange(evt) {
    const value = evt.target.value;
    this.setState({
        value: value,
        invalidLength: value.length < 1 || value.length > 25,
        hasChanged: true,
    });
    }
    handleSubmit(evt) {
    evt.preventDefault();
    this.props.buscando(this.state.value);

    this.setState({
        value: "",
    });
}
render(){
    return(
        <Navbar
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />
    )
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        buscando: (product) => {
            dispatch(buscando(product))
        },
    }
}