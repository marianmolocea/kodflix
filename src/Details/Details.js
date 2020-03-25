import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Details.css'

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
    if(!this.state.isLoaded){
      return <div>Loading...</div>
    } else if(!this.state.movie) {
      return <Redirect to='/not-found' />
    } else {
      return (
        <div className="Details">
          <h2>
            {this.state.movie.title}
          </h2>
          <div className="row">
            <p>{this.state.movie.synopsis}</p>
            <img src={require(`../images/${this.state.movie.image}`)} alt={this.state.movie.title}/>
          </div>
          <Link to="/"><button>Back to home page</button></Link>
        </div>
      );
    }
  }
}