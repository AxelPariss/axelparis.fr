import React, { Component } from 'react'
import './Home.css'
import Menu from './../Menu/Menu'
import profileImage from './img/axel-paris.png'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Menu />
        <div className="home-main">
          <div className="profile-image">
            <img src={profileImage} alt="Axel Paris"/>
          </div>
          <div className="informations">
            <h1>Axel Paris</h1>
            <h2><span className="horizontal-bar"></span>#<span className="word">developer</span></h2> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque ipsum eu augue vestibulum lacinia. Duis tincidunt et eros eget facilisis. Nullam id ultrices nibh. Duis tincidunt et eros eget facilisis. Nullam id ultrices nibh.</p>
            <button className="hire-button">Me recruter</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
