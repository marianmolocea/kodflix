import React, { Component } from 'react'

export default class GetMoviesData extends Component {
  
  componentDidMount() {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=b456277c')
    .then(res => res.json())
    .then((data) => {
      console.log(data)
    })
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}
