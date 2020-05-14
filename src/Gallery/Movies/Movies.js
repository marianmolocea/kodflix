import React, { useState, useEffect } from 'react'
import Movie from '../Movie/Movie'

export default function Movies() {

  let [movies, setMovies] = useState('');
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if(!isLoaded) {
      (async () => {
          const response = await fetch('/rest/shows');
          const moviesData = await response.json();
          console.log(moviesData)
          setMovies(moviesData.data.movies)
          setIsLoaded(true)
      })()
  }
}, [isLoaded])

  return (
    movies && movies.map(movie => 
    <Movie
      key={movie.id}
      id={movie.id}
      image={movie.image}
      title={movie.title} 
    />
  ));
}
