import React from 'react';
import './App.css';
import Weather from './components/Weather';
import Grade from './components/Grade';
import TimeLog from './components/TimeLog/TimeLog';
import WeatherForm from './components/WeatherForm';
import GradeForm from './components/GradeForm';
import Inbox from './components/Inbox/Inbox';

function App() {
  return (
    <div className="App">
      <Inbox />
      <WeatherForm />
      <TimeLog />
      <GradeForm />
    </div>
  );
}

export default App;
