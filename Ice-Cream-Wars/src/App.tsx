import React from 'react';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Votes from "./components/Votes";
import Ad from './components/Ad'

function App() {
  return (
    <div className="App">
      <header>
        <Header user= "Chirpus"/>
      </header>
      <section className="Ad_Container">
        <Ad flavor="Chocolate"
        fontSize={35}
        darkTheme={true}/>

        <Ad flavor="Vanilla"
        fontSize={24}
        darkTheme={false}/>

        <Ad flavor="Strawberry"
        fontSize={42}
        darkTheme={true}/>

      </section>
      <div className="pageContainer">
      <section className="leftSide">
        <AdDesigner/>
      </section>
      <section className="rightSide">
        <Votes/>
      </section>
      </div>
    </div>
  );
}

export default App;
