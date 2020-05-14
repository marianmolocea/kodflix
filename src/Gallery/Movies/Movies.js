import React, { useState, useEffect } from 'react'
import Movie from '../Movie/Movie'
import Loader from '../../Loader/Loader'

export default function Movies() {

  let [movies, setMovies] = useState('');
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if(!isLoaded) {
      (async () => {
          const response = await fetch('/rest/shows');
          const moviesData = await response.json();
          setMovies(moviesData.data.movies)
          setIsLoaded(true)
      })()
  }
}, [isLoaded])

  return (
    <>
    {
      !movies ?
        <Loader /> :
        movies.map(movie => 
          <Movie
            key={movie._id}
            id={movie._id}
            image={movie.image}
            title={movie.title} 
          />
        )
    }
    </>
  )
}
