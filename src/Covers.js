import React from 'react';
import arrow from './images/arrow.png';
import blackList from './images/black-list.jpg';
import got from './images/got.jpg'
import prisonBreak from './images/prison-breack.jpg'
import vikings from './images/vikings.jpg'
import witcher from './images/witcher.jfif'

export default function Covers() {
  return (
    <div className="container">
      <div className="row">
        <img src={arrow} alt="Arrow"/>
        <img src={vikings} alt="The Vikings" />
        <img src={got} alt="Game Of Thrones" />
      </div>
      <div className="row">
        <img src={prisonBreak} alt="Prison Break" />
        <img src={blackList} alt="Black List" />
        <img src={witcher} alt="The Witcher" />
      </div>
    </div>
  );
}
