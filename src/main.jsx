import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx';
import Home from './pages/Home/HomePage.jsx';
import About from './pages/About/About.jsx';
import Exhibitors from './pages/Exhibitors/Exhibitors.jsx';
import Press from './pages/Press/Press.jsx';
import Contact from './pages/Contact/Contact.jsx';

const router = createBrowserRouter([
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
        element: <About />
      },
      {
        path: "exhibitors",
        element: <Exhibitors />
      },
      {
        path: "press",
        element: <Press />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
