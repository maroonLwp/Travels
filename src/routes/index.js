import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import ReactPerfTool from 'react-perf-tool';
import Perf from 'react-addons-perf';

import Index from '../views/index'
import User from '../views/user'
import Detaile from '../views/detaile'
import Signin from '../views/signin'
import Signup from '../views/signup'
import Nav from '../layout/Nav'
import FooterBottom from '../layout/footerBottom'

const Routes = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Signup} />
        <Route path="/detaile" component={Detaile} />
        <Route path="/user" component={User} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Index} />
        <FooterBottom />
        <ReactPerfTool perf={Perf} />
      </div>
    </Router>
  </MuiThemeProvider>
)
export default Routes
