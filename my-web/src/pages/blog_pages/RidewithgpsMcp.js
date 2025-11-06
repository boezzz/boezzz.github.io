import React from 'react';
import '../../App.css';
import './Blogpage.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


function RidewithgpsMcp() {
  return (
    <>
      <Navbar />

      <div className='title'>
        <h1>RideWithGPS MCP: AI-Powered Cycling Companion</h1>
        <h3>July 2025</h3>
      </div>

        <article>
            <p>A Model Context Protocol (MCP) server that brings cycling data to AI assistants.</p>
            <img src='asset/images/ridewithgps-claude.png' alt='RideWithGPS MCP' />
            <p>As an avid cyclist who logs every ride on RideWithGPS, I often found myself wanting to quickly analyze my cycling patterns, compare routes, or get insights from my ride data without navigating through multiple web pages. 
                The idea struck me during a long ride: what if I could simply ask an AI assistant about my cycling activities? 
                This led me to build the RideWithGPS MCP server, making it possible to interact with cycling data through natural language conversations.
            </p>
            <p>The server provides programmatic access to RideWithGPS API data, enabling cyclists to retrieve routes, trips, events, and profile information through AI-powered tools. 
                Built with TypeScript and designed to work seamlessly with Claude desktop, it transforms how cyclists interact with their data - from asking "What was my longest ride last month?" to "Compare my performance on similar routes."
            </p>
            <p>Currently, the server supports fetching owned routes, listing cycling trips with performance metrics, retrieving user profiles, and tracking event participation. 
                The roadmap includes OAuth authentication, enhanced geospatial tracking, and improved data visualization capabilities.
            </p>
            
            <a href='https://github.com/boezzz/ridewithgps-mcp'>
                Link to project repo
            </a>
        </article>

      <Footer />
    </>
  );
}

export default RidewithgpsMcp;