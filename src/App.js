import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/product' component={Product}></Route>
          <Route exact path='/services' component={Services}></Route>
          <Route exact path='/sign-up' component={SignUp}></Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
