import React from 'react'
import {Link} from 'react-router-dom'
import './Movie.css'

export default function Movie({id, image, title}) {
  return (
    <Link to={id} className="Movie">
      <img src={require(`../../images/covers/${image}`)} alt={title} />
      <div className="title">{title}</div>
    </Link>
  )
}