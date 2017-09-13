import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../js/material.js';
import '../css/material.css';


class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-color--blue-100">
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Menu</span>
          <nav className="mdl-navigation">
           <a className="mdl-navigation__link" href = "/">Home</a>
           <a className="mdl-navigation__link" href = "/register">Register</a>
           <a className="mdl-navigation__link" href = "/aboutus">About Us</a>
          </nav>
        </div>
         <main className="mdl-layout__content">
            <div className="page-content"></div>
         </main>
      </div>
    )}
}

ReactDOM.render(<AboutUs/>, document.getElementById('aboutus'));
