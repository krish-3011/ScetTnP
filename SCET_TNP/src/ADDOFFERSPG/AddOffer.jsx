
import Navbar from '../STATSPG/Navbar';
import AddOffersContainer from './AddOfferContainer';
import Header from '../STATSPG/Header';

const AddOffers = () =>
(
    <div className="addoffercontainer">
          <Navbar />
          <Header
            className="addoffers-header" // Add specific styles for Offers
            title="ADD OFFERS" // Dynamic title
            text="Browse through our latest job offers and start your journey towards a fulfilling career. From tech giants to management roles, explore opportunities that await you."
         />
         <AddOffersContainer/>
         
    </div>
    
);

export default AddOffers;