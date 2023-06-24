import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Auth from './components/Auth.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Header.jsx';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Detailed from './components/detailed.jsx';

const router = createBrowserRouter([
{
  path: '/',
  element: <App/>,
},
{
 path: "/auth",
 element: <Auth/>,
},
{ 
path: "/header",
element: <Header/>
},

{ 
  path: "/detailed/:movieId",
  element: <Detailed/>
  },

  { 
    path: "/foter",
    element: <Footer/>
    },
  
  



])
ReactDOM.createRoot( document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
