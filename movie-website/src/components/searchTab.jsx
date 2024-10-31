import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'


export default function SearchTab() {
  {/* search input */}
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()
 
  {/* search button */}
  const handleSearch = (e) => {
    e.preventDefault()
    if(!searchValue) return
    navigate(`/Result?query=${searchValue}`)
  }

  {/* search form */}
  return (
    <div>
      <form onSubmit={handleSearch} 
      className='flex justify-end items-center bg-gray-900 py-1  mb-2 sm:ml-60 lg:ml-80 divide-x divide-white '>
        <input type="text" placeholder='Search for anything' value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)} 
        className='bg-transparent text-white px-14 py-2 rounded-lg focus:outline-none  w-[60%] md:w-3/1 border ' />
      <button type='submit' onClick={handleSearch} 
      className='absolute m-5 pl-2 cursor-pointer' >
         <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:'#fff'}} size='xl'/></button>
    </form>
    </div>
  )
}
