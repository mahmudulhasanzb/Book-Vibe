import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'


//========Think like this==========
// Think every paths are each folder inside src/app of next.js. And each path text is the these[SAONJS] folder's name
// The elements or components are the page.jsx of these folders
// elements and components content is page.jsx and components content.
//=========================================


import { ThemeProvider } from './context/ThemeContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
