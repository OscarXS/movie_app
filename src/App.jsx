import { useEffect, useState } from 'react' 

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Movie from './pages/Movie/Movie'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:movie_id" element={<Movie />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
