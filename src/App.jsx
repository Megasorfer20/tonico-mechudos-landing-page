import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import './css/index.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "*",
      element: <Home />
    }
  ]);

  return (
    <>
    <div></div>
      <RouterProvider router={router} />
    </>
  )
}

export default App
