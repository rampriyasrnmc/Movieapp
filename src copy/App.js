import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Movie/Header'
import Home from './Pages/Home';
import NowPlaying from './Pages/Nowplaying';
import TopRated from './Pages/Toprated';
import MovieDetail from './Pages/Moivedetails';
import Search from './Pages/Search';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/now-playing" element={<NowPlaying />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
