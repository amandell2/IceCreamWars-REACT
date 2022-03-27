import React from 'react';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Votes from "./components/Votes";

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <div className="pageContainer">
      <div className="leftSide">
        <AdDesigner/>
      </div>
      <div className="rightSide">
        <Votes/>
      </div>
      </div>
    </div>
  );
}

export default App;
