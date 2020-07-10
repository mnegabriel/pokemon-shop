import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

function App() {

  const [ prices, setPrices ] = useState([])

  useEffect(() => {
    let temp = []
    for (let i=0; i<964; i++){
      temp.push({ id:i, price: Math.floor(Math.random()*100+1)})
    }
    setPrices(temp)
  }, [])

  return (
    <div className="App">
      <Header />
      <MainContent prices={prices}/>
      <Footer />
    </div>
  );
}

export default App;
