import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Jobs from "./Pages/Jobs.jsx"
import Visa from "./Pages/Visa.jsx"
import NavBar from "./Components/NavBar.jsx"
import Footer from "./Components/Footer.jsx"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const Structure=()=>{
  return(
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

const router=createBrowserRouter([
  {
    path: '/',
    element:<Structure />,
    children:[
      {
        path:"/",
        element:<App/>,
      },
      {
        path:"/jobs",
        element:<Jobs/>
      },
      {
        path:"/visa&immigration",
        element:<Visa/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
