import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Project from './Components/Project.jsx'
import Skills from './Components/Skills.jsx'
import AboutMe from './Components/AboutMe.jsx'
import ContactMe from './Components/ContactMe.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
       path:'/',
       element:<Home/>
      },
      {
        path:'/project',
        element:<Project/>,
        loader:()=>fetch('project.json')
      },
      {
        path:'/skill',
        element:<Skills/>,
      },
      {
        path:'/about',
        element:<AboutMe/>,
      },
      {
        path:'/contact',
        element:<ContactMe/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
