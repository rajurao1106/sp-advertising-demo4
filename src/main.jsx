import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx'
import Blog from './components/Blog/Blog.jsx'
import ChooseUs from './components/ChooseUs/ChooseUs.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx';
import ScrollEffect from './components/ScrollEffect/ScrollEffect.jsx';
import BrandingStrategy from './components/Services/BrandingStrategy.jsx'
import DigitalMarketing from './components/Services/DigitalMarketing.jsx';
import DesigningServices from './components/Services/DesigningServices.jsx'
import EventPromotion from './components/Services/EventPromotion.jsx'
import OutdoorAdvertising from './components/Services/OutdoorAdvertising.jsx'
import PrintMedia from './components/Services/PrintMedia.jsx'
import Showcase from './components/Showcase/Showcase.jsx';
import WhatWeDo from './components/WhatWeDo/WhatWeDo.jsx';
import WelcomePage from './components/WelcomePage/WelcomePage.jsx'


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
      },
      {
        path:"/sp-advertising-demo4/Blog",
        element:<Blog/>,
      },
      {
        path:"/sp-advertising-demo4/Choose-Us",
        element:<ChooseUs/>,
      },
      {
        path:"/sp-advertising-demo4/Contact",
        element:<Contact/>,
      },
      {
        path:"/sp-advertising-demo4/Footer",
        element:<Footer/>,
      },
      {
        path:"/sp-advertising-demo4/ScrollEffect",
        element:<ScrollEffect/>,
      },
      {
        path:"/sp-advertising-demo4/Branding-Strategy",
        element:<BrandingStrategy/>,
      },
      {
        path:"/sp-advertising-demo4/Designing-Services",
        element:<DesigningServices/>,
      },
      {
        path:"/sp-advertising-demo4/Digital-Marketing",
        element:<DigitalMarketing/>,
      },
      {
        path:"/sp-advertising-demo4/Event-Promotion",
        element:<EventPromotion/>,
      },
      {
        path:"/sp-advertising-demo4/Outdoor-Advertising",
        element:<OutdoorAdvertising/>,
      },
      {
        path:"/sp-advertising-demo4/Print-Media",
        element:<PrintMedia/>,
      },
      {
        path:"/sp-advertising-demo4/Showcase",
        element:<Showcase/>,
      },
      {
        path:"/sp-advertising-demo4/Welcome-Page",
        element:<WelcomePage/>,
      },
      {
        path:"/sp-advertising-demo4/WhatWeDo",
        element:<WhatWeDo/>,
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
