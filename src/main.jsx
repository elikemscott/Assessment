import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './pages';
import Product from './pages/product-page';
// import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/products/:id",
    element: <Product />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
)
