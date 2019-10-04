import React, { Component } from 'react'
import moment from "moment"
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import NavigationContainer from './navigation/navigation-container'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import PortfolioDetail from './portfolio/portfolio-detail'
import NoMatch from './pages/no-match'

export default class App extends Component {

  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <h1>Trevor Walker's Portfolio</h1>
            <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
            <NavigationContainer />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/blog' component={Blog} />
                <Route exact path='/portfolio/:slug' component={PortfolioDetail} />
                <Route component={NoMatch} />
              </Switch>
          </div>
        </Router>
      </div>
    ); 

  }
}
