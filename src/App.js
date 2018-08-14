import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import NavComponent from './components/Navbar'
import Home from './containers/Home'
import Snacks from './containers/Snacks'
import Footer from './components/Footer'


export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
           <NavComponent />
            <Route path="/" component={Home}/>
            <Route path="/snacks" component={Snacks}/>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App
