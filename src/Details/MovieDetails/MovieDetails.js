import React from 'react'
import { Link } from 'react-router-dom';
import './MovieDetails.css'
import Play from '../../Play/Play'

export default function MovieDetails({movie: {_id,title, synopsis, trailer, wallpaper}}) {
  let imgUrl = require(`../../images/wallpapers/${wallpaper}`);

  return (
    <div className="MovieDetails" style={{backgroundImage: `url(${imgUrl})`}}>
      <div className="overlay"></div>
      <div className="container">
        <h1>
          {title}
        </h1>
        <div className="desc-container">
          <p>{synopsis}</p>
          <Play trailer={trailer} title={title} />
        </div>
        <Link to="/"><button className="button">Back to home page</button></Link>
      </div>
    </div>
  )
}
