import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import BooksPage from "../pages/books/Books";
import NotFoundPage from "../pages/erropage/NotFound";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/books',
        Component: BooksPage,
      },
    ],
    errorElement:<NotFoundPage/>
  },
]);
