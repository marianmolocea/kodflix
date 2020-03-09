import React from 'react'
import './Movie.css'

export default function Movie(props) {
  return (
    <div className="Movie">
      <img src={props.image} alt={props.title}/>
      <div className="title">{props.title}</div>
    </div>
  )
}
