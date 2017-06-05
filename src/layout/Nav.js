import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { AppBar, IconButton, FlatButton } from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';
import Brand from '../images/travels.png';

import './nav.scss';

injectTapEventPlugin();

export default class Nav extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar
          iconElementLeft={<IconButton>
            <div>
              <img src={Brand} className="brandImage" alt="brand 图片" />
            </div>
          </IconButton>} iconElementRight={<div>
            <FlatButton ><Link to="/signin" className="navSignin">Signin</Link></FlatButton> | <FlatButton><Link to="/signup" className="navSignup">Signup</Link></FlatButton>
          </div>}
        >

          <div className="navItem">
            <Link to="/">首页</Link>
            <Link to="/detaile">目的地</Link>
          </div>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}
