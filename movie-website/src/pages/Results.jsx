import React from 'react'
import SideBar from '../components/sideBar'
import SearchTab from '../components/searchTab'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Results() {
   const [movies, setMovies] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState("")
   const APIKEY = "f1a0f928"
   const location = useLocation()
   const searchTerm = (location.search).split('=')[1]
   
   const [savedMovies, setSavedMovies] = useState(()=>{
    const saved = localStorage.getItem('savedMovies');
    return saved ? JSON.parse(saved) : [];
   })
   const handleSave = (movie) => {
    const updatedSavedMovies = [...savedMovies, movie];
    setSavedMovies(updatedSavedMovies);
    localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
  }
   
  {/* fetch movies from the api */}

   useEffect(()=>{
    const fetchMovies = async()=>{
      try{
        const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${APIKEY}`)
        if (response.data.Search && response.data.Search.length > 0) {
          setMovies(response.data.Search)
        }else{
          setError('No movies found')
        }
      }catch(error){
        setError('Error fetching data')
      }finally{
        setLoading(false)
      }
    }
    fetchMovies()
   },[searchTerm, APIKEY]);
 

  {/* return the movies to the user */}
 
  return (
  
    <div className='bg-gray-900 min-h-screen w-full overflow-x-hidden'>
      <div className='flex w-full relative'>
        <div className='fixed left-0 top-0 z-50'>
          <SideBar/>
        </div>
        <div className='flex-1 p-6 relative min-h-screen'>
          <SearchTab/>
          {/* loading and error handling */}
          {loading ? (
            <div className="ml-0 sm:ml-64 text-white text-center mt-10">Loading...</div>
          ) : error ? (
            <div className="ml-0 sm:ml-64 text-white text-center mt-10">{error}</div>
          ) : (
            // return the movies to the user
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 ml-0 sm:ml-64 justify-items-center pb-10'>
              {movies?.map((movie)=>(
                <div key={movie.imdbID} className="flex flex-col items-center w-full max-w-[200px]">
                  <div className='mb-4 mt-10 image-container'>
                    <img 
                      src={movie.Poster} 
                      alt={movie.Title} 
                      className='w-full h-auto rounded-lg shadow-lg image-container cursor-pointer transition duration-300 hover:scale-105'
                    />
                    {/* save button */}
                    <button className='overlay' onClick={()=>handleSave(movie)}>Save</button>
                    {savedMovies.some(savedMovie => savedMovie.imdbID === movie.imdbID) && (
                      <div className='saved-overlay'>Saved</div>
                    )}
                  </div>
                  <p className='text-white text-center'>{movie.Title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  ) 

}
