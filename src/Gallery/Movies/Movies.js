import React, { Component } from 'react'
import getGallery from './getGallery'
import Movie from '../Movie/Movie'

export default class Movies extends Component {

  componentDidMount() {
    fetch('/rest/shows')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return getGallery().map(movie => 
      <Movie
        key={movie.id}
        id={movie.id}
        image={movie.image}
        title={movie.title} 
      />
    );
  }
}
