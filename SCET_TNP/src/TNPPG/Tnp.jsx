import Navbar from '../STATSPG/Navbar';
import Header from '../STATSPG/Header';
import TnPPContainer from './TnpContainer';


const Tnp = () =>
(
    <div className="tnpcontainer">
          <Navbar />
          <Header
            className="offers-header" // Add specific styles for Offers
            title="TnP POLICY" // Dynamic title
            text="Our Training and Placement Policy ensures a transparent and efficient process for all students. We provide guidelines and support to help you prepare for and secure top job opportunities with leading employers."
         />
         <TnPPContainer />
    </div>
    
);

export default Tnp;