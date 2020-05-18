import React from 'react'
import './Play.css'

export default function Play(props) {

    let movieId = props.match.params.movieId
    console.log(movieId)
    return (
        <div className="Play">
            <iframe>

            </iframe>
        </div>
    )
}
