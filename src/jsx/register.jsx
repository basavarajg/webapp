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
      fname: '',
      mname: '',
      lname: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //event.preventDefault();
    let target = event.target;

    if('username'===target.id)
      this.setState({username: target.value});
    else if('password'===target.id)
      this.setState({password: target.value});
    else if('fname'===target.id)
      this.setState({fname: target.value});
    else if('mname'===target.id)
      this.setState({mname: target.value});
    else if('lname'===target.id)
      this.setState({lname: target.value});

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" id="username"
              onChange={this.handleChange} value={this.state.username}/>
            <label className="mdl-textfield__label" htmlFor="username">User Name</label>
          </div>
          <br />
          <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="password" id="password"
              onChange={this.handleChange} value={this.state.password}/>
            <label className="mdl-textfield__label" htmlFor="password">Password</label>
          </div>
          <br />
          <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" id="fname"
              onChange={this.handleChange} value={this.state.fname}/>
            <label className="mdl-textfield__label" htmlFor="fname">First Name</label>
          </div>
          <br />
          <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" id="mname"
              onChange={this.handleChange} value={this.state.mname}/>
            <label className="mdl-textfield__label" htmlFor="mname">Middle Name</label>
          </div>
          <br />
          <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" id="lname"
              onChange={this.handleChange} value={this.state.lname}/>
            <label className="mdl-textfield__label" htmlFor="lname">Last Name</label>
          </div>
          <div>
            <button className="mdl-button
              mdl-js-button
              mdl-button--fab
              mdl-js-ripple-effect
              mdl-button--colored"
              type="submit"> + </button>
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Register/>, document.getElementById('register'));
