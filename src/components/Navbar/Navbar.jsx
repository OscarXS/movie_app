import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="flex justify-center items-center sm:px-16 px-8 py-4">
        <div className="xl:max-w-[1280px] w-full">
            <div className='header'>
              <div className="text-orange-500 font-semibold text-2xl">Movies</div>
                <ul className="menu">
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar