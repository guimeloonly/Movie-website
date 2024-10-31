import SideBar from '../components/sideBar'
import SearchTab from '../components/searchTab'
import Slides from '../components/slides'
import MoviePoster from '../components/MoviePoster'

function Home() {
  return (
    <div className='bg-gray-900 min-h-screen w-full'>
      <div className='flex w-full relative'>
        {/* Sidebar on the left */}
        <div className='fixed left-0 top-0 z-50'>
          <SideBar /> 
        </div>
        {/* Main content with search bar on top right */}
        <div className="flex-1 p-6 min-h-screen ml-0 sm:ml-64">
          {/* Search Input */}
          <SearchTab/>
          {/* slide */}
          <Slides/>
          <div className='pb-10'>
            {/* Movie cards */}
            <MoviePoster/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
