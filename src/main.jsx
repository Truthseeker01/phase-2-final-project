import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Portfolio from './components/Portfolio.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import PortfolioItem from './components/PortfolioItem.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
        children:[
          {
            path: "portfolio",
            element: <Portfolio />
          },
          {
            path: "portfolio/:id", //:id is a parameter
            element: <PortfolioItem />
          }
        ]
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
    <App />
  </React.StrictMode>,
)
