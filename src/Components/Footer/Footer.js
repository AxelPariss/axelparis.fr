import React, { Component } from 'react'
import './Footer.css'
import youtubeLogo from './img/youtube.svg'
import linkedinLogo from './img/linkedin.svg'
import behanceLogo from './img/behance.svg'
import githubLogo from './img/github.svg'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="/"><img src={youtubeLogo} alt="Youtube" /></a>
        <a href="/"><img src={linkedinLogo} alt="Linkedin" /></a>
        <a href="/"><img src={behanceLogo} alt="Behance" /></a>
        <a href="/"><img src={githubLogo} alt="Github"/></a>
      </div>
    )
  }
}

export default Footer
