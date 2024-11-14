import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CargoList from './components/CargoList';
import CargoDetails from './components/CargoDetails';
import CargoForm from './components/CargoForm';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>KAR-GO APP</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cargo" element={<CargoList />} />
          <Route path="/cargo/:id" element={<CargoDetails />} />
          <Route path="/add" element={<CargoForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
