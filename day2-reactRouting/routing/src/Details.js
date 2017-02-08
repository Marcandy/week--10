import React, {Component} from 'react';

import axios from 'axios';
import './index.css'

export default class Detail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: {}
    }
  }

    componentDidMount() {

      axios.get(`https://practiceapi.devmountain.com/products/${this.props.params.id}`)
        .then(res => {
          this.setState({product: res.data})
        })

    }
  render() {
    return (
      <div className='product-detail'>
        <img src={this.state.product.image} />
        <h1> {this.state.product.title}</h1>
        <h1> {this.state.product.price}</h1>
      </div>
    )
  }
}
