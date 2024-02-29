import React from 'react'
import { Link } from 'react-router-dom';
import './SingleMovie.css'


const SingleMovie = ({ movie }) => {
  return (
    <div className="movie">
      <Link to={`/movie/${movie?.id}`}>
        <div className="">
            <p className='text-white text-sm'>Release Date<br/>{movie?.release_date}</p>
        </div>

        <div className="">
            <img src={movie?.poster_path !== null ? (`https://image.tmdb.org/t/p/original/${movie?.poster_path}`) : 'https://via.placeholder.com/400'} alt="" />
        </div>
        <div className="" style={{ fontFamily: 'Poppins' }}>
            <span>Rating - {movie?.vote_average.toFixed(1)}</span>
            <h3 className='text-white'>{movie?.title}</h3>
        </div>
      </Link>
    </div>
  )
}

export default SingleMovie