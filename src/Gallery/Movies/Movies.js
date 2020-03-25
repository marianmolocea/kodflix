import React, { Component } from 'react'
import Movie from '../Movie/Movie'

export default class Movies extends Component {

  constructor(){
    super();
    this.state = {
      moviesData: []
    }
  }

  componentDidMount() {
    fetch('/rest/shows')
      .then((response) => {
        return response.json();
      })
      .then((moviesData) => {
        this.setState({moviesData});
      });
  }

  render() {
    return (
      this.state.moviesData.map(movie => 
      <Movie
        key={movie.id}
        id={movie.id}
        image={movie.image}
        title={movie.title} 
      />
    ));
  }
}
