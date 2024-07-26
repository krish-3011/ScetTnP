import Navbar from '../STATSPG/Navbar';
import Header from '../STATSPG/Header';



const Profile = () =>
(
    <div className="profilecontainer">
          <Navbar />
          <Header
            className="offers-header" // Add specific styles for Offers
            title="PROFILE" // Dynamic title
            text="Browse through our latest job offers and start your journey towards a fulfilling career. From tech giants to management roles, explore opportunities that await you."
         />
        
    </div>
    
);

export default Profile;