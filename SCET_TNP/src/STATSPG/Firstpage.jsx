
import React from "react";
import './style.css';
import './header.css';
import './button.css';
import './graph.css';
import Navbar from './Navbar';
import Header from './Header';
import Graphs from './Graphs';

const FirstPage = () =>
{
    return (<div className="container">  
        <Navbar />
        <Header
          className="firstpage-header" // Add specific styles for FirstPage
          title="PLACEMENT STATISTICS" // Dynamic title
          text="Gain a comprehensive overview of our placement success rates. Explore detailed statistics on job offers, department-wise placements, and the performance of our graduates."
        />
        <Graphs />
      </div>);

    
}
export default FirstPage;