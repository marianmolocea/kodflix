import React, { Component } from 'react'
import Movie from '../Movie/Movie'
import Loader from '../../Loader/Loader'

export default class Movies extends Component {

  constructor(){
    super();
    this.state = {
      moviesData: [],
      isLoaded: false,
      imageIsLoaded: false,
    }
  }

  componentDidMount() {
    fetch('/rest/shows')
      .then((response) => {
        return response.json();
      })
      .then((moviesData) => {
        this.setState({moviesData, isLoaded: true});
      });
  }

  render() {
    return !this.state.isLoaded ?
        <Loader /> :
        this.state.moviesData.map(movie => 
          <Movie
            key={movie.id}
            id={movie.id}
            image={movie.image}
            title={movie.title} 
          />
    );
  }
}
