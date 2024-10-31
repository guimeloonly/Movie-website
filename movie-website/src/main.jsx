import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import Results from './pages/Results.jsx'
import Error from './pages/Error.jsx'
import Saved from './pages/saved.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  
 {
  path: "/",
  element: <Home/>,
  errorElement: <Error/>,
},
  {
    path:"Result",
    element: <Results/>,
  },
  {
    path: "Save",
    element: <Saved/>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
