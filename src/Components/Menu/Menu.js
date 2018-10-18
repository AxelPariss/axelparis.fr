import React, { Component } from 'react'
import './Menu.css'
import logoImage from './img/logo.png'
import { Link } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/"><img src={logoImage} alt="Logo" /></Link>
        </div>
        <div className="menu">
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projets</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </header>
    )
  }
}

export default Menu
