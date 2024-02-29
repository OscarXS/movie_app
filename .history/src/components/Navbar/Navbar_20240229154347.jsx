import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="flex justify-center items-center sm:px-16 px-8 py-4">
        <div className="xl:max-w-[1280px] w-full">
            <div className='header'>
            
              <div className="logo | text-orange-500 font-semibold text-2xl"><Link to={`/movie/${movie?.id}`}>Movies</div>
              </Link>
              <ul className="menu">
                  <li className='p-5 rounded-2xl text-white bg-black w-7 h-7 flex justify-center items-center'><Link to="/"><FaHome /></Link></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar