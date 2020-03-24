import React, { Component } from 'react'
import getGallery from './getGallery'
import Movie from '../Movie/Movie'

export default class Movies extends Component {

  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('/rest/shows')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({data});
      });
  }

  render() {
    return (
      this.state.data.map(movie => 
      <Movie
        key={movie.id}
        id={movie.id}
        image={movie.image}
        title={movie.title} 
      />
    ));
  }
}
