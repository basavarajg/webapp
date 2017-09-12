import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../js/material.js';
import '../css/material.css';
import '../css/mdl.css';
//import {TextField, Password, Button} from './HtmlElements.jsx';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
  }

  handleSubmit(event) {
    //event.preventDefault();
    //console.dir(event.target);
    event.target.submit();
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-color--grey-100">
      	<main className="mdl-layout__content">
      		<div className="mdl-card mdl-shadow--6dp">
      			<div className="mdl-card__title mdl-color--primary mdl-color-text--white">
      				<h2 className="mdl-card__title-text">Login</h2>
      			</div>
      	  	<div className="mdl-card__supporting-text">
      				<form action="/login" method="post" onSubmit={this.handleSubmit}>
      					<div className="mdl-textfield mdl-js-textfield">
      						<input className="mdl-textfield__input" type="text" name="username" autoFocus="autoFocus"
                    value={this.state.username} onChange={this.handleChange}/>
      						<label className="mdl-textfield__label" for="username">Username</label>
      					</div>
      					<div className="mdl-textfield mdl-js-textfield">
      						<input className="mdl-textfield__input" type="password" name="password"
                    value={this.state.password} onChange={this.handleChange}/>
      						<label className="mdl-textfield__label" for="password">Password</label>
      					</div>
                <div className="mdl-card__actions">
          				<button className="mdl-button
                  mdl-button--colored
                  mdl-js-button
                  mdl-js-ripple-effect">Log in</button>
          			</div>
      				</form>
      			</div>
      		</div>
      	</main>
      </div>
    )};
}

ReactDOM.render(<Login/>, document.getElementById('login'));
