import React, { useEffect, useState } from 'react'

import SingleMovie from '../SingleMovie/SingleMovie';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import { Navigation, Pagination } from 'swiper/modules';
import { Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const NewMovies = () => {
  const [newMovies, setNewMovies] = useState([]);

  const getNewMovies = async () => {
    const response = await fetch(`${import.meta.env.VITE_TMDB_URL}/movie/now_playing?language=en-US&page=1&api_key=${import.meta.env.VITE_TMDB_API_KEY}`)  
    const data = await response.json();
    setNewMovies(data.results)
    console.log("New Movies: ", data.results);
  }

  useEffect(() => {
    getNewMovies()
  },[])

  return (
    <div className="bg-primary | flex justify-center items-start sm:px-16 px-6 pb-14">
      <div className="xl:max-w-[1280px] w-full">
        <div className="newmovies">
          <div className="title | pb-3">
            <h2 className='text-white font-bold text-3xl'>New Movies</h2>
          </div>
          <div className="movies flex flex-wrap">
            <Swiper
              spaceBetween={100}
              slidesPerView={5}
              modules={[Controller, Navigation, Pagination]}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={{type: 'progressbar'}}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
            >
                {newMovies.map(movie => (
                  <SwiperSlide key={movie?.id}>
                    <SingleMovie movie={movie}/>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewMovies