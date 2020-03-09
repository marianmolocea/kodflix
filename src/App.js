import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Gallery from './Gallery/Gallery';
import Details from './Details/Details';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Gallery} />
        <Route exact path='/details' component={Details} />
      </div>
    </Router>
  );
}
export default App;
