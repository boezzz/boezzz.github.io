import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

// import the pages here
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Resume from './pages/Resume';
import Hidden from './pages/Hidden';

// import all project pages
import Beatbounce from './pages/blog_pages/Beatbounce';
import Forward_to_past from './pages/blog_pages/Forward_to_past';
import Unspoken from './pages/blog_pages/Unspoken';
import FridayHarbor from './pages/blog_pages/friday_harbor';

// Wrapper component to include ScrollRestoration
const PageWrapper = ({ children }) => {
  return (
    <>
      {children}
      <ScrollRestoration />
    </>
  );
};

const router = createBrowserRouter([
  {
    // main pages, do not change those paths
    path: "/",
    element: <PageWrapper><Home /></PageWrapper>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/blog",
    element: <PageWrapper><Blogs /></PageWrapper>,
  },
  {
    path: "/resume",
    element: <PageWrapper><Resume /></PageWrapper>,
  },
  {
    path: "/hidden",
    element: <PageWrapper><Hidden /></PageWrapper>,
  },

  // blog pages, add pages below
  {
    path: "/beatbounce",
    element: <PageWrapper><Beatbounce /></PageWrapper>,
  },
  {
    path: "/forward-to-past",
    element: <PageWrapper><Forward_to_past /></PageWrapper>,
  },
  {
    path: "/xr-cooking-capstone",
    element: <PageWrapper><Blogs /></PageWrapper>,
  },
  {
    path: "/unspoken",
    element: <PageWrapper><Unspoken /></PageWrapper>,
  },
  {
    path: "/friday-harbor-2024",
    element: <PageWrapper><FridayHarbor /></PageWrapper>,
  },
]);

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RouterProvider router={router} />;
  }
}