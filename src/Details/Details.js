import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Details extends Component {

  constructor() {
    super();
    this.state = { 
      message: 'Hello, this will be the details page for each Movie & TV show :)'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({message: 'Coming soon! :)'})
    }, 3000)
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.message}
        </h2>
        <Link to="/"><button>Back to home page</button></Link>
      </div>
    );
  }
}