// App.js
import React from 'react';
import './App.css';
import ServerAutoSuggest from './components/citysearch';

function App() {
  return (
    <div className="App">


      <h1>City Search</h1>
      <ServerAutoSuggest />

    </div>
  );
}

export default App;

