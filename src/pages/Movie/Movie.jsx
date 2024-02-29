import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Navbar } from '../../components';

import './Movie.css'

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
    <div className="head | bg-primary w-full h-screen mt-[-100px] xl:max-w-[1280px]">
        <Navbar />
        <div className='relative'>
          <div>
            <div className="herobanner | absolute left-0 top-0 w-full h-[550px] overflow-hidden">
              <img className='object-cover object-top' src={`https://image.tmdb.org/t/p/original/${singleMovie?.backdrop_path}`} alt="image" />
            </div>
            <div className="herotext">
              <p className='text-white mb-4'>design</p>
              <h2 className='text-white font-bold text-lg mb-6 leading-normal'>{singleMovie?.title}</h2>
              <p className='text-white text-base mb-4'>{singleMovie?.overview}</p>
            </div>
          </div>
        </div>

        <div className="bg-primary | flex justify-center items-start sm:px-16 px-6 pb-14 z-[999]">
        <div className="xl:max-w-[1280px] w-full">
          <div className="heobanner">
          <p className='text-white mb-4'>design</p>
          <h2 className='text-white font-bold text-lg mb-6 leading-normal'>{singleMovie?.title}</h2>
          <p className='text-white text-base mb-4'>{singleMovie?.overview}</p>
          </div>
        </div>
      </div>
    </div>




    // <div className="item | absolute inset-0 overflow-hidden duration-500">
    //         <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${singleMovie?.backdrop_path}`} alt="image" />
    //         <div className="content | absolute left-[20%] top-[20%] w-[500px] max-w-[80%] z-[14]">
    //             <p className='text-white mb-4'>design</p>
    //             <h2 className='text-white font-bold text-lg mb-6 leading-normal'>{singleMovie?.title}</h2>
    //             <p className='text-white text-base mb-4'>{singleMovie?.overview}</p>
    //         </div>
    //     </div>
  )
}

export default Movie