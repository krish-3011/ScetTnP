import Navbar from '../STATSPG/Navbar';
import Header from '../STATSPG/Header';
import AboutContainer from './AboutContainer';



const About = () =>
(
    <div className="aboutcontainer">
          <Navbar />
          <Header
            className="offers-header" // Add specific styles for Offers
            title="ABOUT" // Dynamic title
            text="Welcome to our placement portal, where we connect students with top employers. We provide tailored career opportunities, resources, and guidance to help students transition smoothly from academia to industry."
         />
         <AboutContainer/>
        
    </div>
    
);

export default About;