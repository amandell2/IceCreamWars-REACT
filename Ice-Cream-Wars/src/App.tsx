import React from 'react';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <div>
        <AdDesigner/>
      </div>
      
    </div>
  );
}

export default App;
