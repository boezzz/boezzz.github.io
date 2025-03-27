import React, { useEffect } from 'react';
import '../App.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

function Blogs() {
  useEffect(() => {
    // Set page title and scroll to top when component mounts
    document.title = "Boe's Blog | Thoughts on Technology & Sustainability";
    window.scrollTo(0, 0);
  }, []);

  // to add new blog, go to /components/Cards.js, and then add the new page's js under blog_pages, lastly add routing in APP.js
  return (
    <>
      <Navbar />
      <Cards />
      <Footer />
    </>
  );
}

export default Blogs;