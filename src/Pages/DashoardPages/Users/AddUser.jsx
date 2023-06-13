import React, { useState } from 'react';
import axios from '../../../Axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddUserPage() {
  // State to hold user data
  //message
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send a POST request to the API endpoint
    const response = await axios.post('/users',
    {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phone: e.target.phone.value,
      city: e.target.city.value,
      building: e.target.building_number.value,
      street: e.target.street.value,
      role: 'user',
      image: e.target.image.file,
    }
    );
    //set message
    setMessage(response.data);
    
    
  };


  return (
    <div>
      <h2>Add User</h2>
      <form  onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className={`form-control`}
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className={`form-control`}
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className={`form-control`}
            id="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className={`form-control`}
            id="phone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City 
          </label>
          <input
            type="text"
            name="city"
            className={`form-control`}
            id="city"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="street" className="form-label">
            Street
          </label>
          <input
            type="text"
            name="street"
            className={`form-control`}
            id="street"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="building_number" className="form-label">
            Building Number
          </label>
          <input
            type="text"
            name="building_number"
            className={`form-control`}
            id="building_number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            name="image"
            className={`form-control`}
            id="image"
          />
        </div>
        <button type="submit" className="btn btn-primary">Add User</button>
        <p>{message}</p>

      </form>
    </div>
  );
}
export default AddUserPage;
