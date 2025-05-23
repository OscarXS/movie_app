import React, { useEffect, useState } from 'react'
import styles from './SearchBar.module.css'
import SingleMovie from '../SingleMovie/SingleMovie'


const SearchBar = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_TMDB_URL}search/movie?query=${title}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`.replace(' ', '+'));

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    searchMovies("")
  },[])

  return (
    <div className="bg-primary | flex justify-center items-start sm:px-16 p-8 sm:pt-10">
      <div className="xl:max-w-[1280px] w-full">
        <div className={styles.container}>
          <div className={styles.search}>
            <input 
                type="text" 
                placeholder='Search for movies' 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-[90%]'
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    console.log("Pressed")
                    searchMovies(searchTerm)
                  } 
                }}
              />
              <div 
                className={styles.button} 
                onClick={() => searchMovies(searchTerm)}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="white" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
          </div>

          {
            searchTerm === "" && searchTerm.length < 3 ? (
              <div className="empty p-10">
                  <h2 className='text-lg text-gray-300'></h2>
                </div>
            ) : (
              movies?.length > 0 ? (
                <div className="container">
                  {movies.map((movie) => (
                    <SingleMovie movie={movie} key={movie.id}/>
                  ))}
                </div>
              ) : (
                <div className="empty p-10">
                  <h2 className='text-lg text-gray-300'>No movies found</h2>
                </div>
              )
            )
          }
        </div>
      </div>
    </div>
    
  )
}

export default SearchBar