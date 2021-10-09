import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Navbar/Footer"
import Home from "./components/HomePage/Home"

import Dashboard from "./components/Dashboard/Dashboard"

import UserProfile from "./components/Dashboard/UserPortfolio"

import ShopNow from "./components/ProductRelated/ShopNow"
import Product from "./components/ProductRelated/Product"
import Offers from "./components/Offers/Offers"
import Cart from "./components/Dashboard/Cart"
import Payment from "./components/payments/Payment"

import ProductOverView from "./components/ProductRelated/ProductOverView";


import Login from "./components/UserAuth/Login"
import Register from "./components/UserAuth/Register"


import './App.css';
import "./index.css"


const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />


          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/dashboard/:orderDetails" exact component={Dashboard} />

          <Route path="/dash_user/userProfile" exact component={UserProfile} />

          <Route path="/product" exact component={Product} />
          <Route path="/product/:productValue" exact component={Product} />
          <Route path="/shopnow" exact component={ShopNow} />
          <Route path="/Offers" exact component={Offers} />
          <Route path="/Offers/:offerValue" exact component={Offers} />
          <Route path="/Cart" exact component={Cart} />
          <Route path="/productOverview" exact component={ProductOverView} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />

          <Route path="/payment" exact component={Payment} />
        </Switch>

        <Footer />
      </Router>

    </div >
  );
}

export default App;
