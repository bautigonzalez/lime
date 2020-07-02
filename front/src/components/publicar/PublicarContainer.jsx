import React from 'react'
import axios from 'axios'
import Publicar from '../publicar/Publicar'
import store from '../../store'
import { publicar } from '../../action-creator/Publicar'
import { connect } from 'react-redux'

class PublicarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      category: "",
      price: "",
      image: "",
      image2:""
    };
    this.nameChange = this.nameChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.imageSecChange = this.imageSecChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nameChange(evt) {
    const value = evt.target.value;
    this.setState({
      name: value,
    });
  }
  descriptionChange(evt) {
    const value = evt.target.value;
    this.setState({
      description: value,
    });
  }
  categoryChange(evt) {
    const value = evt.target.value;
    this.setState({
      category: value,
    });
  }
  priceChange(evt) {
    const value = evt.target.value;
    this.setState({
      price: value,
    });
  }
  imageChange(evt) {
    const value = evt.target.value;
    this.setState({
      image: value,
    });
  }

  imageSecChange(evt) {
    const value = evt.target.value;
    this.setState({
      image2: value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("state: ", this.state);
    this.props.publicar(this.state);
  }

  render() {
    return (
      <Publicar
        name={this.state.name}
        description={this.state.description}
        category={this.state.category}
        valoration={this.state.valoration}
        price={this.state.price}
        image={this.state.image}
        image2={this.state.image2}
        imageChange={this.imageChange}
        imageSecChange={this.imageSecChange}
        nameChange={this.nameChange}
        descriptionChange={this.descriptionChange}
        categoryChange={this.categoryChange}
        valorationChange={this.valorationChange}
        priceChange={this.priceChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        publicar: (product) => {
            dispatch(publicar(product)).then(() => {
                ownProps.history.push("/products")
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(PublicarContainer)