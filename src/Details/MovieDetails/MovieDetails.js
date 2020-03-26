import React from 'react'
import { Link } from 'react-router-dom';
import './MovieDetails.css'

export default function MovieDetails(props) {
  return (
    <div className="MovieDetails">
      <h2>
        {props.movie.title}
      </h2>
      <div className="row">
        <p>{props.movie.synopsis}</p>
        <img src={require(`../../images/${props.movie.image}`)} alt={props.movie.title}/>
      </div>
      <Link to="/"><button>Back to home page</button></Link>
    </div>
  )
}
