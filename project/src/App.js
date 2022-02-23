import React from 'react';
import './App.scss';
import { getLCP, getFID, getCLS } from 'web-vitals';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';

if (typeof window !== 'undefined') {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);

  const Axe = require('@axe-core/react');
  Axe(React, 1000);
}

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Hero />
        <Cards />
      </main>
    </div>
  );
}

export default App;
