import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TextField, Password, Button} from './HtmlElements.jsx';



class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(document.getElementById('username').value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form action="#">
          <TextField id="username" labelName="User Name"/><br/>
          <Password id="password" labelName="Password"/><br/>
          <TextField id="firstname" labelName="First Name"/><br/>
          <TextField id="middlename" labelName="Middle Name"/><br/>
          <TextField id="lastname" labelName="Last Name"/><br/>
          <Button btnName="+" id="submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Register/>, document.getElementById('register'));
