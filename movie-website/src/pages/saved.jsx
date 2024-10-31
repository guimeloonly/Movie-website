import React from 'react'
import SideBar from '../components/sideBar'
import SearchTab from '../components/searchTab'
import {useState, useEffect} from 'react'

export default function Saved() {
  const [savedMovies, setSavedMovies] = useState([])

  {/* remove movie from the saved list */}

  const removeMovie = (id)=>{
    const newMovies = savedMovies.filter((movie)=>movie.imdbID !== id)
    setSavedMovies(newMovies)
    localStorage.setItem('savedMovies', JSON.stringify(newMovies))
  }

  {/* get the saved movies from the local storage */}
  useEffect(()=>{
    const saved = localStorage.getItem('savedMovies');
    if(saved){
      setSavedMovies(JSON.parse(saved))
    }
  },[])

  {/* return the saved movies to the user */}
  return (
    <>
    <div className='bg-gray-900 w-full h-full'>
      <div className='fixed left-0 top-0 z-50'>
      <SideBar/>
      </div>
      <div className='flex-1 p-6 relative'>
      <SearchTab/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 ml-0 sm:ml-64 justify-items-center'>
      {savedMovies.map((movie)=>(
        <div key={movie.imdbID} className="flex flex-col items-center w-full max-w-[250px]">
          <div className='mb-4 mt-10 image-container'>
          <img src={movie.Poster} alt={movie.Title} className='w-52 h-[300px] rounded-lg shadow-lg cursor-pointer transition duration-300 hover:scale-105' />
          {/* remove button */}
          <button className='overlay text-white' onClick={()=>removeMovie(movie.imdbID)}>Remove</button>
          </div>
          <p className='text-white text-center max-w-[200px]'>{movie.Title}</p>
        </div>
      ))}
      </div>
    </div>
    </div>
    </>
  )
}
