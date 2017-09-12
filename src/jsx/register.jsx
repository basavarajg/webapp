import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../js/material.js';
import '../css/material.css';
import '../css/mdl.css';
//import {TextField, Password, Button} from './HtmlElements.jsx';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstname: '',
      middlename: '',
      lastname: '',
      email: '',
      mobile: ''

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let target = event.target.name;
    if('username'===target)
      this.setState({username: event.target.value});
    else if('password'===target)
      this.setState({password: event.target.value});
    else if('firstname'===target)
      this.setState({firstname: event.target.value});
    else if('middlename'===target)
      this.setState({middlename: event.target.value});
    else if('lastname'===target)
      this.setState({lastname: event.target.value});
    else if('email'===target)
      this.setState({email: event.target.value});
    else if('mobile'===target)
        this.setState({mobile: event.target.value});
  }

  handleSubmit(event) {
    //console.dir(event.target);
    if(''===this.state.username)
      event.preventDefault();
    else
      event.target.submit();
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-color--grey-100">
        <main className="mdl-layout__content">
          <div className="mdl-card mdl-shadow--6dp">
            <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
              <h2 className="mdl-card__title-text">Create New Account</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <form action="/register" method="post" onSubmit={this.handleSubmit}>
                <div className="mdl-textfield mdl-js-textfield">
                  <input  className="mdl-textfield__input" type="text" name="username" autoFocus="autoFocus"
                    value={this.state.username} onChange={this.handleChange}/>
                  <label className="mdl-textfield__label" htmlFor="username">User Name</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield">
                  <input  className="mdl-textfield__input" type="password" name="password"
                    value={this.state.password} onChange={this.handleChange}/>
                  <label className="mdl-textfield__label" htmlFor="password">Password</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield">
                  <input  className="mdl-textfield__input" type="text" name="firstname"
                    value={this.state.firstname} onChange={this.handleChange}/>
                  <label className="mdl-textfield__label" htmlFor="firstname">First Name</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield">
                  <input  className="mdl-textfield__input" type="text" name="middlename"
                    value={this.state.middlename} onChange={this.handleChange}/>
                  <label className="mdl-textfield__label" htmlFor="middlename">Middle Name</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield">
                  <input  className="mdl-textfield__input" type="text" name="lastname"
                    value={this.state.lastname} onChange={this.handleChange}/>
                  <label className="mdl-textfield__label" htmlFor="lastname">Last Name</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield">
                  <input  className="mdl-textfield__input" type="text" name="email"
                    value={this.state.email} onChange={this.handleChange}/>
                  <label className="mdl-textfield__label" htmlFor="email">Email</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield">
                  <input  className="mdl-textfield__input" type="text" name="mobile"
                    value={this.state.mobile} onChange={this.handleChange}/>
                  <label className="mdl-textfield__label" htmlFor="mobile">Mobile</label>
                </div>
                <div className="mdl-card__actions mdl-layout">
                  <button className="mdl-button
                  mdl-button--colored
                  mdl-js-button
                  mdl-js-ripple-effect"
                  type="submit">Register</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

ReactDOM.render(<Register/>, document.getElementById('register'));
