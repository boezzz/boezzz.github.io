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

// import all project pages
import Beatbounce from './pages/project_pages/Beatbounce';
import Forward_to_past from './pages/project_pages/Forward_to_past';

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
  {
    path: "/p1",
    element: <Beatbounce />,
  },
  {
    path: "/p2",
    element: <Forward_to_past />,
  },
  {
    path: "/p3",
    element: <Projects />,
  },
  {
    path: "/p4",
    element: <Projects />,
  },
  {
    path: "/p5",
    element: <Projects />,
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