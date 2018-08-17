import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllSnax, getFeaturedSnax} from './state/actions'

import NavComponent from './components/Navbar'
import Home from './containers/Home'
import Snacks from './containers/Snacks'
import Snack from './containers/Snack'
import AddSnack from './containers/AddSnack'
import EditSnack from './containers/EditSnack'
import Footer from './components/Footer'


export class App extends Component {
  componentDidMount(){
    this.props.getAllSnax()
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
           <NavComponent />
            <Route exact path="/" component={Home}/>
            <Route path="/snack" component={Snack}/>
            <Route exact path="/snacks" component={Snacks}/>
            <Route exact path="/addsnack" component={AddSnack}/>
            <Route path="/editsnack" component={EditSnack}/>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({getAllSnax}, dispatch)
export default connect(null, mapDispatchToProps)(App)
