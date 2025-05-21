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

const TopMovies = () => {

  const [topMovies, setTopMovies] = useState([]);

  const getTopMovies = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_TMDB_URL}movie/top_rated?language=en-US&page=1&vote_count.gte=40000&api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
      const data = await response.json();
      setTopMovies(data.results)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTopMovies()
  },[])

  return (
    <div className="bg-primary | flex justify-center items-start sm:px-16 px-6 pb-14">
      <div className="xl:max-w-[1280px] w-full">
        <div className="topmovies">
          <div className="title | pb-3">
            <h2 className='text-white font-bold text-3xl'>Popular Movies</h2>
          </div>
          <div className="movies flex flex-wrap">
          <Swiper
              spaceBetween={100}
              slidesPerView={5}
              modules={[Controller, Navigation, Pagination]}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={{type: 'progressbar'}}
              navigation={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
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
                {topMovies.map(movie => (
                  <SwiperSlide key={movie.id}>
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

export default TopMovies