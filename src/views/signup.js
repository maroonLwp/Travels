import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton'
import { cyan500, grey900 } from 'material-ui/styles/colors';

import Default from '../images/default.jpeg'
import './signup.scss'


const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  },
  floatingLabelStyle: {
    color: grey900
  },
  underlineStyle: {
    borderColor: cyan500
  }
};

const styleButton = {
  color: grey900
};

export default class SignIn extends Component{
  constructor(){
    super()

    this.handleChange = this.haneleChange.bind(this)
    this.vertifyUserInfor = this.vertifyUserInfor.bind(this)

    this.state = {
      username: {
        value: '',
        error: ''
      },
      password: {
        value: '',
        error: ''
      },
      repassword: {
        value: '',
        error: ''
      },
      email: {
        value: '',
        error: ''
      },
      phone: {
        value: '',
        error: ''
      }
    }
  }

  haneleChange(e){
    const valueType = e.target.id.split('-')[2]
    switch (valueType){
      case 'Username':
        return this.setState({
          username: {
            value: e.target.value,
            error: ''
          }
        })
      case 'Password':
        return this.setState({
          password: {
            value: e.target.value,
            error: ''
          }
        })
      case 'RePassword':
        return this.setState({
          repassword: {
            value: e.target.value,
            error: ''
          }
        })
      case 'Email':
        return this.setState({
          email: {
            value: e.target.value,
            error: ''
          }
        })
      case 'Phone':
        return this.setState({
          phone: {
            value: e.target.value,
            error: ''
          }
        })
      default:
        return this.state
    }
  }
  vertifyUserInfor(e){
    const valueType = e.target.id.split('-')[2]
    switch (valueType){
      case 'Username':
        if (e.target.value.length < 3 || e.target.value.length > 7){
          return this.setState({
            username: {
              username: '',
              error: '用户名长度小于3或者大于7'
            }
          })
        }
        break
      case 'Password':
        if (e.target.value.length < 4){
          return this.setState({
            password: {
              value: '',
              error: '密码安全度太低！！！'
            }
          })
        } else if (e.target.value.length > 13){
          return this.setState({
            password: {
              value: '',
              error: '密码过长，请合理设置密码！！！'
            }
          })
        }
        break
      case 'RePassword':
        if (e.target.value !== this.state.password){
          return this.setState({
            repassword: {
              value: '',
              error: '两次输入密码不一致！！！'
            }
          })
        }
        break
      default:
        return this.state
    }
  }

  render(){
    return (
      <div className="Register">
        <div className="RegisterInfor">
          <div className="signupHeader" />
          <div className="signupForm">
            <form action="" className="signupConetent">
              <div>
                <label htmlFor="username" />
                <TextField hintText="Username Field" errorText={this.state.username.error} underlineStyle={styles.underlineStyle} floatingLabelText="Username" floatingLabelStyle={styles.floatingLabelStyle} value={this.state.username.value} onBlur={this.vertifyUserInfor} onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="password" />
                <TextField hintText="Password Field" errorText={this.state.password.error} floatingLabelText="Password" underlineStyle={styles.underlineStyle} floatingLabelStyle={styles.floatingLabelStyle} type="password" value={this.state.password.value} onBlur={this.vertifyUserInfor} onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="repassword" />
                <TextField hintText="RePassword Field" errorText={this.state.repassword.error} floatingLabelText="RePassword" underlineStyle={styles.underlineStyle} floatingLabelStyle={styles.floatingLabelStyle} type="password" value={this.state.repassword.value} onBlur={this.vertifyUserInfor} onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="email" />
                <TextField hintText="Email Field" errorText={this.state.email.error} floatingLabelText="Email" underlineStyle={styles.underlineStyle} floatingLabelStyle={styles.floatingLabelStyle} type="email" value={this.state.email.value} onBlur={this.vertifyUserInfor} onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="phone" />
                <TextField hintText="Phone Field" errorText={this.state.phone.error} floatingLabelText="Phone" underlineStyle={styles.underlineStyle} floatingLabelStyle={styles.floatingLabelStyle} type="phone" value={this.state.phone.value} onBlur={this.vertifyUserInfor} onChange={this.handleChange} />
              </div>
              <div style={styles.block}>
                <Checkbox
                  label="记住密码？"
                  style={styles.checkbox}
                />
              </div>
              <RaisedButton label="Submit" fullWidth style={styleButton} primary />
            </form>
            <div className="ribbon">Sign Up </div>
          </div>
        </div>
      </div>
    )
  }
}