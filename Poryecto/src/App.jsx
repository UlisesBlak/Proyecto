import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UseState, FetchExample, RandomColorButtons, RandomColorCard, AnimationExample } from './UseState';
import Navbar from './NavBar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/usestate" element={<UseState />} />
          <Route path="/useeffect" element={<FetchExample />} />
          <Route path="/useref" element={<RandomColorCard />} />
          <Route path="/animaciones" element={<AnimationExample />} />
          <Route path="/" element={<div><h2>Proyecto de Ulises</h2></div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
