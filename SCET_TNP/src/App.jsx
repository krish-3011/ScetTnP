import React from 'react';
import './STATSPG/style.css';
import './STATSPG/header.css';
import './STATSPG/button.css';
import './STATSPG/graph.css';
import Navbar from './STATSPG/Navbar';
import Header from './STATSPG/Header';
import Graphs from './STATSPG/Graphs';
import Offers from './OFFERSPG/Offers';
import FirstPage from './STATSPG/Firstpage';
import Vision from './V&MPG/Visions';
import Tnp from './TNPPG/Tnp';
import About from './ABOUTPG/About';
import Team from './TEAMPG/Team';
import Notification from './NOTIFICATIONPG/Notification';
import Profile from './PROFILE/Profile';
import AddOffers from './ADDOFFERSPG/AddOffer';


import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

const App = () => (
<BrowserRouter>
<Routes>
  <Route exact path ='/' element={<FirstPage/>} />
  <Route exact path ='/offers' element={<Offers/>} />
  <Route exact path ='/statistics' element={<FirstPage/>} />
  <Route exact path ='/vision_and_mission' element={<Vision/>} />
  <Route exact path ='/tnp_policy' element={<Tnp/>} />
  <Route exact path ='/about' element={<About/>} />
  <Route exact path ='/team' element={<Team/>} />
  <Route exact path ='/notification' element={<Notification/>} />
  <Route exact path ='/profile' element={<Profile/>} />
  <Route exact path ='/add_offer' element={<AddOffers/>} />

  
</Routes>

</BrowserRouter>


);

export default App;
