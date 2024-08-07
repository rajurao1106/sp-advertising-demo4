import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx'

const router = createBrowserRouter([
  {
    path:"/sp-advertising-demo4/",
    element:<App/>,
    children: [
      {
        path:"/sp-advertising-demo4/",
        element:<Home/>
      },
      {
        path:"/sp-advertising-demo4/about",
        element:<AboutMe/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
