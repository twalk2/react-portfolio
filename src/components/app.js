import React, { Component } from 'react'
import moment from "moment"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import PortfolioContainer from './portfolio/portfolio-container'
import NavigationContainer from './navigation/navigation-container'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
        <NavigationContainer />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/blog' component={Blog} />
        </Switch>
          </div>
        </Router>

        <h1>Trevor Walker's Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer/>
      </div>
    );
  } 
}
