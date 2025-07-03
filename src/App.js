import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Movie/Header';
import Footer from './Movie/Footer';
import Home from './Pages/Home';
import Nowplaying from './Pages/Nowplaying';
import Toprated from './Pages/Toprated';
import Search from './Pages/Search';
import Moviedetails from './Pages/Moivedetails'; // Rename file to `Moviedetails.jsx`
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nowplaying" element={<Nowplaying />} />
            <Route path="/toprated" element={<Toprated />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<Moviedetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
