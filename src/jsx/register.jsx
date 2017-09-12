import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../js/material.js';
import '../css/material.css';
//import {TextField, Password, Button} from './HtmlElements.jsx';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstname: '',
      middlename: '',
      lastname: ''

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
  }

  handleSubmit(event) {
    event.preventDefault();
    console.dir(event.target);
    event.target.submit();
  }

  render() {
    return (
      <div className=" mdl-grid mdl-card mdl-shadow--16dp mdl-color--blue-grey-50">
        <form action="/register" method="post" onSubmit={this.handleSubmit}>
          <div className="mdl-card__title mdl-color--teal-500">
            <h2 className="mdl-card__title-text mdl-color-text--white">Create New Account</h2>
          </div>
          <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
            <input  className="mdl-textfield__input" type="text" name="username" autoFocus="autoFocus"
              value={this.state.username} onChange={this.handleChange}/>
            <label className="mdl-textfield__label" htmlFor="username">User Name</label>
          </div>
          <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
            <input  className="mdl-textfield__input" type="password" name="password"
              value={this.state.password} onChange={this.handleChange}/>
            <label className="mdl-textfield__label" htmlFor="password">Password</label>
          </div>
          <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
            <input  className="mdl-textfield__input" type="text" name="firstname"
              value={this.state.firstname} onChange={this.handleChange}/>
            <label className="mdl-textfield__label" htmlFor="firstname">First Name</label>
          </div>
          <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
            <input  className="mdl-textfield__input" type="text" name="middlename"
              value={this.state.middlename} onChange={this.handleChange}/>
            <label className="mdl-textfield__label" htmlFor="middlename">Middle Name</label>
          </div>
          <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
            <input  className="mdl-textfield__input" type="text" name="lastname"
              value={this.state.lastname} onChange={this.handleChange}/>
            <label className="mdl-textfield__label" htmlFor="lastname">Last Name</label>
          </div>
          <div className="mdl-cell mdl-cell--12-col send-button">
            <button className="mdl-button
              mdl-js-button
              mdl-button--raised
              mdl-js-ripple-effect
              mdl-button--accent"
              type="submit"> Register </button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="mdl-button
                mdl-js-button
                mdl-button--raised
                mdl-js-ripple-effect
                mdl-button--accent"
                type="reset">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Register/>, document.getElementById('register'));
