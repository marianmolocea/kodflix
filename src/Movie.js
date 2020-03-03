import React from 'react'

export default function Movie(props) {
  return (
    <div className="movie">
      <img src={props.image} alt={props.title}/>
      <div className="title">{props.title}</div>
    </div>
  )
}
