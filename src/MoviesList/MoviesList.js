import React from 'react';
import arrow from '../images/arrow.png';
import blackList from '../images/black-list.jpg';
import got from '../images/got.jpg';
import prisonBreak from '../images/prison-breack.jpg';
import vikings from '../images/vikings.jpg';
import witcher from '../images/witcher.jfif';

import Movie from './Movie/Movie';
import './MoviesList.css';

export default function MoviesList() {
  return (
    <div className="MoviesList">
      <div className="container">
        <Movie image={arrow} title="Arrow" />
        <Movie image={got} title="Games of Thrones" />
        <Movie image={vikings} title="The Vikings" />
      </div>
      <div className="container">
        <Movie image={blackList} title="Black List" />
        <Movie image={prisonBreak} title="Prison Break" />
        <Movie image={witcher} title="The Witcher" />
      </div>
    </div>

  );
}
