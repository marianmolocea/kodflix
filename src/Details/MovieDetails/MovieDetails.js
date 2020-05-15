import React from 'react'
import { Link } from 'react-router-dom';
import './MovieDetails.css'

export default function MovieDetails({movie: {title, synopsis, image}}) {
  return (
    <div className="MovieDetails">
      <h2>
        {title}
      </h2>
      <div className="row">
        <p>{synopsis}</p>
        <img src={require(`../../images/${image}`)} alt={title}/>
      </div>
      <Link to="/"><button className="button">Back to home page</button></Link>
    </div>
  )
}
