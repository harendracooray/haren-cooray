import logo from './logo.svg';
import React from 'react';
import './AppDesignV1.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import PastAemWork from './components/PastAemWork';
import PastReactWork from './components/PastReactWork';
import { Footer } from './components/footer';
import PastAEMComponents from './components/PastAEMComponents';


function App() {




  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='pastaemwork' element={<PastAemWork />} />
        <Route path='pastreactwork' element={<PastReactWork />} />
        <Route path='components' element={<PastAEMComponents />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
