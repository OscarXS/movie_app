import { useEffect, useState } from 'react' 

import './Home.css'
import { Hero, Navbar, NewMovies, SearchBar, TopMovies, UpcomingMovies } from '../../components'

function Home() {

  return (
    <>
        <Navbar />
        <Hero />
        <SearchBar />
        <NewMovies />
        <TopMovies />
        <UpcomingMovies />
    </>
  )
}

export default Home
