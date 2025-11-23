import React, { useEffect } from 'react';
import '../App.css';
import './Blogs.css';
import '../components/Cards.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardItem from '../components/CardItem';
import blogsData from '../data/blogs';

function Blogs() {
  useEffect(() => {
    // Set page title and scroll to top when component mounts
    document.title = "Boe's Blog | Thoughts on Technology & Sustainability";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className='blogs-container'>
        <div className='cards__header'>
          <h1>Blogs</h1>
        </div>

        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              {blogsData.map((item) => (
                <CardItem
                  key={item.id}
                  src={item.src}
                  title={item.title}
                  path={item.path}
                  tag={item.tag}
                  date={item.date}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blogs;