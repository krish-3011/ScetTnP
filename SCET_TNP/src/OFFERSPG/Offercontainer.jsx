import React from "react";
import './cards.css';
import ApplyCard from "./Applycard";
import mockData from "./mockdata";

const Offerscontainer = () =>
    (
        <div className="apllicationcontainerframe">
            <div className="headingofapllicationframe">OPPURTUNITIES</div>
            <hr className="lineunderheading"/>
        <div className="appllicationframe">
        
        <div className="cards-container">
            {mockData.map((job, index) => (
        <ApplyCard 
          key={index} 
          company={job.company} 
          title={job.title} 
          type={job.type} 
          location={job.location} 
          salary={job.salary} 
          date={job.date}
        />
      ))}
    </div>
        </div>
        </div>
        
       
    );    
        




    
export default Offerscontainer;