import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const t = fetch('https://wooordhunt.ru/word/environment');
  console.log('t :>> ', t);
  return (
    <div className="App">
    </div>
  );
}

export default App;
