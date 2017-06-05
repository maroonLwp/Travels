import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton'
import { grey100, cyan500 } from 'material-ui/styles/colors';

import './signin.scss'
import Default from '../images/default.jpeg'

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  },
  floatingLabelStyle: {
    color: grey100
  },
  underlineStyle: {
    borderColor: cyan500
  }
};

const styleButton = {
  color: grey100
};
export default class SignIn extends Component{
  render(){
    return (
      <div className="Login">
        <div className="userInfor">
          <div className="loginHeader">
            <img src={Default} alt="" className="loginImage" />
          </div>
          <h2 className="signInTitle">Sign In</h2>
          <div className="loginForm">
            <form action="">
              <div>
                <label htmlFor="username" />
                <TextField hintText="Username Field" underlineStyle={styles.underlineStyle} floatingLabelText="username" floatingLabelStyle={styles.floatingLabelStyle} />
              </div>
              <div>
                <label htmlFor="password" />
                <TextField hintText="Password Field" floatingLabelText="Password" underlineStyle={styles.underlineStyle} floatingLabelStyle={styles.floatingLabelStyle} type="password" />
              </div>
              <div style={styles.block}>
                <Checkbox
                  label="记住密码？"
                  style={styles.checkbox}
                />

                <span className="siunupLink">to sign Up</span>
              </div>
              <RaisedButton label="Submit" fullWidth style={styleButton} primary />
            </form>
          </div>
        </div>
      </div>
    )
  }
}