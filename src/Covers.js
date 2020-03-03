import React from 'react';
import arrow from './images/arrow.png';
import blackList from './images/black-list.jpg';
import got from './images/got.jpg'
import prisonBreak from './images/prison-breack.jpg'
import vikings from './images/vikings.jpg'
import witcher from './images/witcher.jfif'

import Movie from './Movie'

export default function Covers() {
  return (
    <div className="container">
      <div className="row">
        <Movie image={arrow} />
        <Movie image={got} />
        <Movie image={vikings} />
      </div>
      <div className="row">
        <Movie image={blackList} />
        <Movie image={prisonBreak} />
        <Movie image={witcher} />
      </div>
    </div>
  );
}