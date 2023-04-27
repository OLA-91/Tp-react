import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Articles from './components/articles/Articles.js';
import Panier from './components/panier/Panier.js';



function App() {
  return (

    <>
      <Header />
      <div className="container">
        <Panier />
        <div className="articles">
          <Articles />

        </div>
      </div>


    </>



  );
}



export default App;
