import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../Gallery/Movies/getGallery'

export default class Details extends Component {

  constructor() {
    super();
    this.state = { 
      movie: {},
    }
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movie = getGallery().find(movie => movie.id === movieId);
    this.setState({ movie })
  }

  render() {
    if(!this.state.movie){
      return <Redirect to='/not-found' />
    } 
    return (
      <div>
        <h2>
          {
            this.state.movie.title
          }
        </h2>
        <Link to="/"><button>Back to home page</button></Link>
      </div>
    );
  }
}