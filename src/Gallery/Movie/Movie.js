import React from 'react'
import {Link} from 'react-router-dom'
import './Movie.css'

export default function Movie(props) {
  return (
    <Link to={props.id} className="Movie">
      <img src={props.image} alt={props.title}/>
      <div className="title">{props.title}</div>
    </Link>
  )
}
