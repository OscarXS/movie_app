import React, { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { slider, getCurrentMovies } from '../../utils/slider'
import { useEffect } from 'react';
import './Hero.css'
import { Link } from 'react-router-dom';

const Hero = () => {

    const [newMovies, setNewMovies] = useState([]);

    const getNewMovies = async () => {
        const response = await fetch(`${import.meta.env.VITE_TMDB_URL}/movie/now_playing?language=en-US&page=1&api_key=${import.meta.env.VITE_TMDB_API_KEY}`)  
        const data = await response.json();
        setNewMovies(data.results)
        console.log("New Movies: ", data.results);
    }

    useEffect(() => {
        slider();
        getNewMovies()
    },[])
  return (
    <div className="slider | bg-primary w-full h-screen mt-[-100px] relative">
    {/* List of Items */}
    <div className="list">
        <Link to={`/movie/${newMovies[6]?.id}`}>
        <div className="item | absolute inset-0 overflow-hidden duration-500 active">
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${newMovies[6]?.backdrop_path}`} alt="image" />
            <div className="content | absolute left-[20%] top-[20%] w-[500px] max-w-[80%] z-[14]">
                <p className='text-white mb-4'>design</p>
                <h2 className='text-white font-bold text-lg mb-6 leading-normal'>{newMovies[6]?.title}</h2>
                <p className='text-white text-base mb-4'>{newMovies[6]?.overview}</p>
            </div>
        </div>
        </Link>

        <Link to={`/movie/${newMovies[14]?.id}`}>
        <div className="item | absolute inset-0 overflow-hidden duration-500">
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${newMovies[14]?.backdrop_path}`} alt="image" />
            <div className="content | absolute left-[20%] top-[20%] w-[500px] max-w-[80%] z-[14]">
                <p className='text-white mb-4'>Top Movies</p>
                <h2 className='text-white font-bold text-base lg:text-lg mb-6 leading-tight'>{newMovies[14]?.title}</h2>
                <p className='text-white text-base mb-4'>{newMovies[14]?.overview}</p>
            </div>
        </div>
        </Link>

        <Link to={`/movie/${newMovies[2]?.id}`}>
        <div className="item | absolute inset-0 overflow-hidden duration-500">
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${newMovies[2]?.backdrop_path}`} alt="image" />
            <div className="content | absolute left-[20%] top-[20%] w-[500px] max-w-[80%] z-[14]">
                <p className='text-white mb-4'>design</p>
                <h2 className='text-white font-bold text-lg mb-6 leading-normal'>{newMovies[2]?.title}</h2>
                <p className='text-white text-base mb-4'>{newMovies[2]?.overview}</p>
            </div>
        </div>
        </Link>

        <Link to={`/movie/${newMovies[3]?.id}`}>
        <div className="item | absolute inset-0 overflow-hidden duration-500">
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${newMovies[3]?.backdrop_path}`} alt="image" />
            <div className="content | absolute left-[20%] top-[20%] w-[500px] max-w-[80%] z-[14]">
                <p className='text-white mb-4'>design</p>
                <h2 className='text-white font-bold text-lg mb-6 leading-normal'>{newMovies[3]?.title}</h2>
                <p className='text-white text-base mb-4'>{newMovies[3]?.overview}</p>
            </div>
        </div>
        </Link>

        <Link to={`/movie/${newMovies[4]?.id}`}>
        <div className="item | absolute inset-0 overflow-hidden duration-500">
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${newMovies[4]?.backdrop_path}`} alt="image" />
            <div className="content | absolute left-[20%] top-[20%] w-[500px] max-w-[80%] z-[14]">
                <p className='text-white mb-4'>design</p>
                <h2 className='text-white font-bold text-lg mb-6 leading-normal'>{newMovies[4]?.title}</h2>
                <p className='text-white text-base mb-4'>{newMovies[4]?.overview}</p>
            </div>
        </div>
        </Link>
        
    </div>
    {/* Buttons */}
    <div className="arrows | flex gap-3">
        <button id="prev"><FaArrowLeft /></button>
        <button id="next"><FaArrowRight /></button>
    </div>
    {/* Thumbnail */}
    <div className="thumbnail bottom-0 flex justify-center gap-3 w-full h-[300px] z-10 overflow-auto box-border">
        <Link to={`/movie/${newMovies[6]?.id}`}>
        <div className="item active">
            <img src={`https://image.tmdb.org/t/p/original/${newMovies[6]?.poster_path}`} alt="thumbnail" />
        </div>
        </Link>

        <Link to={`/movie/${newMovies[14]?.id}`}>
        <div className="item">
            <img src={`https://image.tmdb.org/t/p/original/${newMovies[14]?.poster_path}`} alt="thumbnail" />
        </div>
        </Link>

        <Link to={`/movie/${newMovies[2]?.id}`}>
        <div className="item">
            <img src={`https://image.tmdb.org/t/p/original/${newMovies[2]?.poster_path}`} alt="thumbnail" />
        </div>
        </Link>

        <Link to={`/movie/${newMovies[3]?.id}`}>
        <div className="item">
            <img src={`https://image.tmdb.org/t/p/original/${newMovies[3]?.poster_path}`} alt="thumbnail" />
        </div>
        </Link>

        <Link to={`/movie/${newMovies[4]?.id}`}>
        <div className="item">
            <img src={`https://image.tmdb.org/t/p/original/${newMovies[4]?.poster_path}`} alt="thumbnail" />
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Hero