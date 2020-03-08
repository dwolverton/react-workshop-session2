import React from 'react';
import './App.css';
import Weather from './components/Weather';
import Grade from './components/Grade';
import Inbox from './components/Inbox/Inbox';
import TimeLog from './components/TimeLog/TimeLog';
import WeatherForm from './components/WeatherForm';

function App() {
  return (
    <div className="App">
      <WeatherForm />
      <TimeLog />
    </div>
  );
}

export default App;
