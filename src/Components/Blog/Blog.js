import React, { Component } from 'react'
import './Blog.css'
import firebase from './../Config/Firebase'

class Blog extends Component {
  constructor(){
    super()
    this.state = {
      articles: []
    }
  }
  componentWillMount(){
    const ref = firebase.database().ref('articles')

    ref.on('value', (snapshot) => {
      this.setState({articles: snapshot.val()})
    })
  }
  render() {
      let articlesList = this.state.articles.map((article, key) => (
        <div className="article" key={key}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))

    return (
      <div className="blog">
        <h1>Blog</h1>
        <div className="articles">
          {(this.state.articles.length > 0) ? articlesList : 'chargement...'}        
        </div>
      </div>
    )
  }
}

export default Blog
