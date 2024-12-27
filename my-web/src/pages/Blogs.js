import React from 'react';
import '../App.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

function Blogs() {
  // to add new blog, go to /components/Cards.js, and then add the new page's js under project_pages
  return (
    <>
      <Navbar />
      <Cards />
      <Footer />
    </>
  );
}

export default Blogs;