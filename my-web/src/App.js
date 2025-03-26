import React, { useEffect } from 'react';
import './App.css';
import {
  createHashRouter,
  RouterProvider,
  useLocation,
  Outlet,
} from "react-router-dom";

// Import the pages here
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Resume from './pages/Resume';
import Hidden from './pages/Hidden';

// Import all project pages
import Beatbounce from './pages/blog_pages/Beatbounce';
import Forward_to_past from './pages/blog_pages/Forward_to_past';
import Unspoken from './pages/blog_pages/Unspoken';
import FridayHarbor from './pages/blog_pages/friday_harbor';
import XRCooking from './pages/blog_pages/XR_cooking';
import ARESI from './pages/blog_pages/AR_esi';

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout component to include ScrollToTop
const Layout = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);

const router = createHashRouter([
  {
    element: <Layout />, // Add the layout with ScrollToTop here
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/hidden",
        element: <Hidden />,
      },
      {
        path: "/beatbounce",
        element: <Beatbounce />,
      },
      {
        path: "/forward-to-past",
        element: <Forward_to_past />,
      },
      {
        path: "/xr-cooking-capstone",
        element: <XRCooking />,
      },
      {
        path: "/unspoken",
        element: <Unspoken />,
      },
      {
        path: "/friday-harbor-2024",
        element: <FridayHarbor />,
      },
      {
        path: "/ar-esi",
        element: <ARESI />,
      },
    ],
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
