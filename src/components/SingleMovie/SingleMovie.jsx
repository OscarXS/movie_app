import React from 'react'
import { Link } from 'react-router-dom';


const SingleMovie = ({ movie }) => {
  return (
    <div className="movie">
      <Link to={`/movie/${movie?.id}`}>
        <div className="">
            <p className='text-white'>{movie?.release_date}</p>
        </div>

        <div className="">
            <img src={movie?.poster_path !== null ? (`https://image.tmdb.org/t/p/original/${movie?.poster_path}`) : 'https://via.placeholder.com/400'} alt="" />
        </div>
        <div className="">
            <span>Rating - {movie?.vote_average}</span>
            <h3 className='text-white'>{movie?.title}</h3>
        </div>
      </Link>
    </div>
  )
}

export default SingleMovie