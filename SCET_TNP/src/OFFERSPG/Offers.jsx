
import Navbar from '../STATSPG/Navbar';
import Header from '../STATSPG/Header';
import Offerscontainer from './Offercontainer';
import './cards.css';

const Offers = () =>
(
    <div className="offer1container">
          <Navbar />
          <Header
            className="offers-header" // Add specific styles for Offers
            title="OFFERS" // Dynamic title
            text="Browse through our latest job offers and start your journey towards a fulfilling career. From tech giants to management roles, explore opportunities that await you."
         />
         <Offerscontainer/>
    </div>
    
);

export default Offers;