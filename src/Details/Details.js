import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Details.css'
import MovieDetails from './MovieDetails/MovieDetails'
import Loader from '../Loader/Loader';

export default function Details(props) {

    let [movie, setMovie] = useState('');
    let [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      if(!isLoaded) {
        (async () => {
            const response = await fetch(`/rest/shows/${props.match.params.movieId}`);
            const movieData = await response.json();
            setMovie(movieData.data.movie)
            setIsLoaded(true)
        })()
    }
  }, [isLoaded, props.match.params.movieId])

  return !isLoaded ? 
    <Loader /> :
    !movie ?
      <Redirect to='/not-found' /> :
      <MovieDetails movie={movie} />
}