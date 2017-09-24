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
      <div className="mdl-layout mdl-js-layout  mdl-color--grey-900">
        <div className="mdl-layout__drawer">

          <nav className="mdl-navigation">
           <a className="mdl-navigation__link mdl-color-text--black" href = "/">Home</a>
           <a className="mdl-navigation__link mdl-color-text--black" href = "/register">Register</a>
           <a className="mdl-navigation__link mdl-color-text--black" href = "/aboutus">About Us</a>
          </nav>
        </div>
         <main className="mdl-layout__content">
            <div className="page-content"></div>
         </main>
      </div>
    )}
}

ReactDOM.render(<AboutUs/>, document.getElementById('aboutus'));
