import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import the pages here
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/things-i-am-doing",
    element: <About />,
  },
]);

export default class App extends React.Component {

    constructor(props) {
      super(props);
    }
  
    render () {
      return (
        <>
          <RouterProvider router={router} />
        </>
      )
    }
  }