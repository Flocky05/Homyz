import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Our Value/Value';
import Contract from './components/Contact Us/Contract';
import Started from './components/Get Started/Started';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/Residencies",
        element:<Residencies></Residencies>
      },
      {
        path:"/value",
        element:<Value></Value>
      },
      {
        path:"/contact",
        element:<Contract></Contract>
      },
      {
        path:"/started",
        element:<Started></Started>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
