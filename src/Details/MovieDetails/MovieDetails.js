import React from 'react'
import { Link } from 'react-router-dom';
import './MovieDetails.css'

export default function MovieDetails({movie: {title, synopsis, image, wallpaper}}) {
  let imgUrl = require(`../../images/wallpapers/${wallpaper}`);

  return (
    <div className="MovieDetails" style={{backgroundImage: `url(${imgUrl})`}}>
      <div className="overlay"></div>
      <div className="container">
        <h1>
          {title}
        </h1>
        <p>{synopsis}</p>
        <Link to="/"><button className="button">Back to home page</button></Link>
      </div>
    </div>
  )
}
