import React from 'react';
import './App.css';

import { Brand, CTA,  Navbar } from './components';
import { Footer, Blog, Possibility , Features, whatGPT3, Header, WhatGPT3} from './containers';


const  App = () => {
  return (
    <div className="App">
          <div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
          <Brand />
          <WhatGPT3 />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
    </div>
  );
}

export default App;
