import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Gallery from './Gallery/Gallery';
import Details from './Details/Details';
import NotFound from './NotFound/NotFound'

function App() {
  return (
    <Router>
      <div className="App"> 
        <Route exact path='/' component={Gallery} />
        <Route exact path='/:movieId' component={Details} />
        <Route exact path='/not-found' component={NotFound} />
      </div>
    </Router>
  );
}
export default App;
