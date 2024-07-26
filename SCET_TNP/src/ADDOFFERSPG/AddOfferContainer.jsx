import React, { useState } from 'react';
import './addoffer.css';

const AddOffersContainer = () => {
    const initialFormData = {
      companyName: '',
      title: '',
      location: '',
      type: 'internship',
      salary: '',
      criteria: '',
      lastDate: ''
    };
  
    const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //sending data
    let response = await fetch("http://localhost:8080/offers" , {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(formData)
    });

    //cheak for respose
    if(response.status === 200){
      alert("new Offer created");
      setFormData(initialFormData);
    } else{
      alert("please resubmit ! check all details again");
    }

    // // Handle form submission
    // console.log(formData);
    
    // Reset the form to its initial state
    
  };

  return (
    <div className="pmainaddoffercontainer">
      <h1 className='addofferheading'>OFFERS DETAILS</h1>
      <hr className='addofferheadinline'/> 
      <form onSubmit={handleSubmit} method='post' className="form-container">
        <div className='addoffertextbox'>
          <label className='addofferinputtext'>Company Name :</label>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="addoffertext"/>
        </div>
        <div className='addoffertextbox'>
          <label className='addofferinputtext'>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="addoffertext"/>
        </div>
        <div className='addoffertextbox'>
          <label className='addofferinputtext'>Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} className="addoffertext"/>
        </div>
        <div className='addoffertextbox'>
          <label className='addofferinputtext'>Type</label>
          <select name="type" value={formData.type} onChange={handleChange} className="addoffertext">
            <option value="internship">Internship</option>
            <option value="full-time">Job</option>
          </select>
        </div>
        <div className='addoffertextbox'>
          <label className='addofferinputtext'>Salary</label>
          <input type="number" name="salary" value={formData.salary} onChange={handleChange} className="addoffertext"/>
        </div>
        <div className='addoffertextbox'>
          <label className='addofferinputtext'>Criteria</label>
          <input type="text" name="criteria" value={formData.criteria} onChange={handleChange} className="addoffertext"/>
        </div>
        <div className='addoffertextbox'>
          <label className='addofferinputtext'>Last Date</label>
          <input type="date" name="lastDate" value={formData.lastDate} onChange={handleChange} className="addoffertext"/>
        </div>
        <button type="submit" className="addoffertext">Submit</button>
      </form>
    </div>
  );
};

export default AddOffersContainer;
