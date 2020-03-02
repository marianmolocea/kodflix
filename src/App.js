import React from 'react';
import got from './got.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix</h1>
      <img src={got} alt="Game Of Thrones" />
      <div className="row">
        <div className="title">Arrow</div>
        <div className="title">The Vikings</div>
        <div className="title">Game Of Thrones</div>
      </div>
      <div className="row">
        <div className="title">Prison Break</div>
        <div className="title">Black List</div>
        <div className="title">The Witcher</div>
      </div>
    </div>
  );
}
export default App;
