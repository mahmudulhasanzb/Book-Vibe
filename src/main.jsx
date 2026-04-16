import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage/HomePage'
import BooksPage from './pages/books/Books'

//========Think like this==========
// Think every paths are each folder inside src/app of next.js. And each path text is the these[SAONJS] folder's name
// The elements or components are the page.jsx of these folders
// elements and components content is page.jsx and components content.
//=========================================

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/books",
        Component: BooksPage
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
