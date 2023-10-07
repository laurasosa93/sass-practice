import React from 'react';
import CityList from './components/cities/CityList';
import { cities } from './data/cities';
import './App.scss';

function App() {
  return (
    <div className="App">
      <CityList cities={cities} />
    </div>
  );
}

export default App;
