import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Navbar } from '../../components';

import './Movie.css'
import { FaArrowLeft } from 'react-icons/fa';

const Movie = () => {

  const { movie_id } = useParams()

  const [singleMovie, setSingleMovie] = useState([]);

  const getMovie = async () => {
    const response = await fetch(`${import.meta.env.VITE_TMDB_URL}movie/${movie_id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)  
    const data = await response.json();
    setSingleMovie(data)
  }

  useEffect(() => {
    getMovie()
  },[])
  
  return (
    <div className='h-dvh'>
      <Navbar />
      <div className="bg-primary w-full overflow-hidden pb-60">
        <div className="flex flex-col justify-center items-center sm:px-16 px-8 py-4 relative" style={{ height: '100vh' }}>
          <div className="heroImage | w-full h-[450px] overflow-hidden -mt-8">
            <img className='object-cover object-top' src={`https://image.tmdb.org/t/p/original/${singleMovie?.backdrop_path}`} alt="image" />
          </div>

          <div className="flex justify-center items-center sm:px-16 px-8 py-4 w-full z-10 mt-40">
            <div className="xl:max-w-[1280px] w-full flex flex-col md:flex-row gap-20 items-center rever">
              <img className='flex-[1] object-cover object-top' src={`https://image.tmdb.org/t/p/original/${singleMovie?.poster_path}`} alt="image" />
              <div className="flex flex-col flex-[1] md:flex-[3] ">
                <h2 className='text-white text-5xl font-bold'>{singleMovie?.title}</h2>
                <p className='text-base text-white mt-8'>{singleMovie?.overview}</p>
                <p className='text-base text-gray-500 mt-8'>Releases: {singleMovie?.release_date}</p>
                <p className='text-base text-orange-500 mt-18'>Rated: <span className='text-white'>{singleMovie?.vote_average}</span></p>
                <p className='text-base text-orange-500 mt-8 underline'><Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaArrowLeft size={15} /> Back</Link></p>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Movie