import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../js/material.js';
import '../css/material.css';

export class Label extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <label className="mdl-textfield__label" htmlFor={this.props.id}>
          {this.props.labelName}
        </label>
    );
  }
}

export class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type="text"
          id = {this.props.id}
          value = {this.state.value} onChange = {this.handleChange} />
        <Label labelName={this.props.labelName} id={this.props.id} />
      </div>
    );
  }
}

export class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
        <input  className="mdl-textfield__input" type="password"
          id = {this.props.id}
          value={this.state.value} onChange={this.handleChange} />
        <Label labelName={this.props.labelName} id={this.props.id} />
      </div>
    );
  }
}

export class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i className="material-icons">{this.props.btnName}</i>
        </button>
      </div>
    );
  }
}
