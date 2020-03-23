import React from 'react';
import Movies from './Movies/Movies'
import GetMoviesData from './Movies/GetMoviesData'

import './Gallery.css';

export default function Gallery() {
  return (
    <div className="Gallery">
      <h1>Welcome to Kodflix</h1>
      <div className="container">
        <Movies />
      </div>
    </div>

  );
}