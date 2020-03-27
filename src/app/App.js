import React, { Component } from '../../node_modules/react';
import logo from './logo.svg';
import './App.css';

// services
import HttpService from '../services/http-service';

// components
import Product from '../product/product';
import WishList from "../wishlist/wishlist";

const http = new HttpService();

class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        products: []
      };

      this.loadData = this.loadData.bind(this);
      this.productList = this.productList.bind(this);
      this.loadData();
  }

  loadData = () => {
    let self = this;
    http.getProducts().then(data => {
      //console.log(products);
      self.setState({ products: data});
    }, err => {
      console.log("There's an error getting products: ", err);

    });
  }

  productList = () => {
    const list = this.state.products.map((product) => 
      <div className="col-sm-4" key={product._id}>
        <Product title={product.title} price={product.price} imgUrl={product.imgUrl}/>
      </div>
    );

    return (list);
  }

  render() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <div className="container-fluid App-main">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              {this.productList()}              
            </div>
          </div>
          <div className="col-sm-4">
            <WishList />
          </div>       
        </div>
      </div>
    </div>
  );
  };
}

export default App;
