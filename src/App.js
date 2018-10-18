import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import { BrowserRouter as Router } from "react-router-dom"
import './Layout.css'



import { mapStyles, bounceTransition } from './Utils/react-router-transition-utils'


// Header & Footer
import Menu from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer'

// Pages
import Home from './Components/Home/Home'
import Blog from './Components/Blog/Blog'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                <div>
                <Menu />

                    <AnimatedSwitch
                        atEnter={bounceTransition.atEnter}
                        atLeave={bounceTransition.atLeave}
                        atActive={bounceTransition.atActive}
                        mapStyles={mapStyles}
                        className="route-wrapper"
                    >
                        <Route exact path="/" component={Home} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact" component={Contact} />
                    </AnimatedSwitch>
                    <Footer />
                    </div>
                </Router>
            </div>
        )
    }
}

export default App