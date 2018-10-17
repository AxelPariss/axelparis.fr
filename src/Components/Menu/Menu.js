import React, { Component } from 'react'
import './Menu.css'

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <a href="#">Blog</a>
        <a href="#">Projets</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
      </div>
    )
  }
}

export default Menu
