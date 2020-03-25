import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Details.css'
import MovieDetails from './MovieDetails/MovieDetails'

export default class Details extends Component {

  constructor() {
    super();
    this.state = { 
      moviesData: [],
      isLoaded: false,
      movie: {},
    }
  }

  componentDidMount() {
    fetch('/rest/shows')
      .then((response) => {
         return response.json();
      })
      .then((moviesData) => {
        let movieId = this.props.match.params.movieId;
        let movie = moviesData.find(movie => movie.id === movieId);
        this.setState({ movie, isLoaded: true  })
      });
    }

  render() {
    return !this.state.isLoaded ? 
      <div>Loading...</div> :
      !this.state.movie ?
        <Redirect to='/not-found' /> :
        <MovieDetails movie={this.state.movie} />
  }
}