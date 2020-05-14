import React from 'react';
import Movies from './Movies/Movies'

import './Gallery.css';

export default function Gallery() {
  return (
    <div className="Gallery">
      <div className="container">
        <Movies />
      </div>
    </div>

  );
}