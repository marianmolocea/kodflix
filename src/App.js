import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Gallery from './Gallery/Gallery';
import Details from './Details/Details';
import NotFound from './NotFound/NotFound';
import NavBar from './NavBar/NavBar';
import ManageTvShows from './ManageTvShows/ManageTvShows';
import Play from './Play/Play';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={Gallery} />
        <Route exact path='/:movieId' render={(props) => <Details {...props} />} />
        <Route exact path='/:movieId/play' render={(props) => <Play {...props} />} />
        <Route exact path='/not-found' component={NotFound} />
        <Route exact path='/manage/tv-shows' component={ManageTvShows} />
      </div>
    </Router>
  );
}
export default App;
