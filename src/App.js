import React from 'react';
import './App.css';
import Header from './components/header';
import Planning from './components/planning';
import Trending from './components/trending';
import 'bootstrap/dist/css/bootstrap.min.css';
import Curated from './components/curated';
import Protected from './components/protected';
import Hourspacers from './components/hourspacers';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Header Header={Header}/>
      <Planning/>
      <Curated/>
      <Trending/>
      <Protected/>
      <Hourspacers/>
      <Footer/>
    </div>
  );
}

export default App;