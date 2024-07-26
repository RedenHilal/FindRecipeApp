import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RecipePage from './component/WholeRecipe/recipepage.jsx'
import NavRecipePage from './component/WholeRecipe/NavrecipePage.jsx'

const router = createBrowserRouter([
  {
    path:'/recipe/a/:id',
    element:<RecipePage/>,
  },
  {
    path:'/recipe/b/:id',
    element:<NavRecipePage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
