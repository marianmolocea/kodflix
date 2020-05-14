import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Gallery from './Gallery/Gallery';
import Details from './Details/Details';
import NotFound from './NotFound/NotFound'
import NavBar from './NavBar/NavBar'

function App() {
  return (
    <Router>
      <div className="App"> 
        <Route exact path='/' component={NavBar} />
        <Route exact path='/' component={Gallery} />
        <Route exact path='/:movieId' render={(props) => <Details {...props} />} />
        <Route exact path='/not-found' component={NotFound} />
      </div>
    </Router>
  );
}
export default App;
