import React from 'react'
import getGallery from './getGallery'
import Movie from '../Movie/Movie'

export default function Movies() {
  return getGallery().map(movie => 
    <Movie
      key={movie.id}
      id={movie.id}
      image={movie.image}
      title={movie.title} 
    />
  );
} 
