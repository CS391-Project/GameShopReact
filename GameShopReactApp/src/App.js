// Basic Imports
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// Other Imports
import './App.css';
import data from './data.json';

// Data
const categoryData = data.categoryList;
const productData = data.productList;
var active_filters = [];


/*
 * Categories
 * Parent Component: Home
*/

class Categories extends Component
{

  render() {
    return (
        <div id="categories">
          <h2>Categories</h2>
          {categoryData.map((category,i) => (
            <div key={i}>
              <input type="checkbox" className="filter" id={category} value={category}></input>
              <label htmlFor={category}>{category}</label>
              <br></br>
            </div>
          ))}
        <button onClick={this.props.apply_filter}>Apply Filter</button>
        </div>
    );
  }
}


/*
 * Shop
 * Parent Component: Home
*/

class Shop extends Component
{
  
  render() {
    return (
      <div id="shop">
        <h2>Shop</h2>
          {productData.filter((product) =>!(active_filters.includes(product.category))).map((product, i) => (
            <form key={i} id={product.name} action="/info.html">
              <p>{product.name}</p> 
              <p>Category: {product.category}</p>
              <p>Price: {product.price}</p>
              <input type="submit" value="Info" className="submitButton"></input>
              <br></br>
              <br></br>
              <img src={process.env.PUBLIC_URL + "/images/"+product.link} alt={product.name}/>
            </form>
          ))}
      </div>
    );
  }
}


/*
 * Home Page
 * Child Components: Categories, Shop
*/

class Home extends Component {

  constructor(props)
  {
    super(props);
    this.state = { filtered: false};
    this.apply_filter = this.apply_filter.bind(this);
  }

  apply_filter() {

    var filter_list = document.getElementsByClassName("filter")
  
    active_filters = []
  
    for (var i = 0; i < filter_list.length; ++i)
      if (!filter_list[i].checked) active_filters.push(filter_list[i].value)

    if(active_filters.length === filter_list.length) active_filters = []

    this.setState( {filtered : !this.filtered }); // Refresh Products
  }

  render() {
    return (
      
      <div>

        <aside>
          <Categories apply_filter= {this.apply_filter}/>
        </aside>

        <section>
          <Shop state = {this.state}/>
        </section>

      </div>

    );
  }
  
}


/*
 * Login Page
 * Child Components:
*/

class Login extends Component
{
  render() {
    return (

      <div id="login"></div>

    );
  }
  
}


/*
 * Cart Page
 * Child Components:
*/

class Basket extends Component
{
  render() {
    return (

      <div id="basket"></div>

    );
  }
  
}


/*
 * App
 * Child Components: Home, Login, Basket
*/


class App extends Component {

  render() {
    return (

      <Router>

        <div>

        <header id="navigation">

          <h1>Game Shop</h1>

          <Link to="/">Home </Link>
          <Link to="/basket">Basket </Link>
          <Link to="/login">Login</Link>

        </header>

        <Switch>

           <Route exact path="/"><Home/></Route>

           <Route exact path="/basket"><Basket/></Route>

           <Route exact path="/login"><Login/></Route>

        </Switch>

        <footer className="shop_footer">
          <p> Best games for best prices</p>
        </footer>
         
        </div>

      </Router>

    );
  }
  
}


export default App;