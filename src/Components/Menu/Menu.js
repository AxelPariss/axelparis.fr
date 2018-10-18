import React, { Component } from 'react'
import './Menu.css'
import logoImage from './img/logo.png'


class Menu extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <div className="menu">
          <a href="#">Blog</a>
          <a href="#">Projets</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </div>
      </header>
    )
  }
}

export default Menu
