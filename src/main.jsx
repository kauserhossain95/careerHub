import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Home } from './components/home/Home';
import { ErrorPage } from './components/errorPage/ErrorPage';
import { Root } from './components/root/Root';
import { Statistics } from './components/statistics/Statistics';
import { Applied } from './components/applied/Applied';
import { Blogs } from './components/blogs/Blogs';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied",
        element: <Applied></Applied>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      }

    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

