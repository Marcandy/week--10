import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default class Store extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

    componentDidMount() {
      console.log( 'I just mounted');
      axios.get('https://practiceapi.devmountain.com/products')
        .then(res => {
          this.setState({products: res.data})
        })

    }
  render() {

    var products = this.state.products.map((product, i) => {
      return(<Link key={i} to={'products/' + product.id} >
        <li > {product.title} </li>
      </Link>)
    })
    return (
      <div>
        <h1> Buy stuff </h1>
        <ul> {products}</ul>
      </div>
    )
  }
}
