/* import React from 'react'
import {Link} from 'react-router-dom'
import './Movie.css'

 */
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Movie.css'



export default class Movie extends Component {
  constructor(){
    super();
    this.state = {
      isLoaded: false,
      loadImage: false
    }
  }


  render() {
    return (
      <Link to={this.props.id} className="Movie">
        <img src={require(`../../images/${this.props.image}`)} alt={this.props.title} />
        <div className="title">{this.props.title}</div>
      </Link>
    )
  }
}



/* export default function Movie(props) {

  return (
    <Link to={props.id} className="Movie">
      <img src={require(`../../images/${props.image}`)} alt={props.title} />
      <div className="title">{props.title}</div>
    </Link>
  )
} */
