import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Service from './Service'
import Product1 from './Product1'
import Product2 from './Product2'
import Product3 from './Product3'
import Product4 from './Product4'
import Product5 from './Product5'
import Product6 from './Product6'
const Router = () => {
  const router = createBrowserRouter([
    {
      element: <Home></Home>,
      path: "/"
    },
    {
      element: <Service></Service>,
      path: "/Service"
    },
    {
      element: <Product1></Product1>,
      path: "/Product1"
    },
    {
      element: <Product2></Product2>,
      path: "/Product2"
    },
    {
      element: <Product3></Product3>,
      path: "/Product3"
    },
    {
      element: <Product4></Product4>,
      path: "/Product4"
    },
    {
      element: <Product5></Product5>,
      path: "/Product5"
    },
    {
      element: <Product6></Product6>,
      path: "/Product6"
    },

  ]
  )
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default Router