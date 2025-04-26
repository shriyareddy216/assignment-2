import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './add.css';
const AddStudent = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    dept: '',
    enrollYear: '',
    isActive: false,
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://assignment-backend-6xq9.onrender.com/students', form)
      .then(() => navigate('/view'))
      .catch(err => {
        console.error('Submit failed:', err);
        alert('Failed to add student.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="add-student-form">
      <h2>Add Student</h2>
      <label htmlFor="firstName">First Name</label>
      <div className="form-group">
       
        <input id="firstName" name="firstName" placeholder="First Name" onChange={handleChange} required />
      </div>
      <label htmlFor="lastName">Last Name</label>
      <div className="form-group">
        
        <input id="lastName" name="lastName" placeholder="Last Name" onChange={handleChange} required />
      </div>
      <label htmlFor="email">Email</label>
      <div className="form-group">
        
        <input id="email" type="email" name="email" placeholder="Email" onChange={handleChange} required />
      </div>
      <label htmlFor="dob">Date of Birth</label>
      <div className="form-group">
        
        <input id="dob" type="date" name="dob" value={form.dob} onChange={handleChange} required />
      </div>
      <label htmlFor="dept">Department</label>
      <div className="form-group">
        
        <input id="dept" name="dept" placeholder="Department" onChange={handleChange} required />
      </div>
      <label htmlFor="enrollYear">Enrollment Year</label>
       
      <div className="form-group">
      <input id="enrollYear" type="number" name="enrollYear" placeholder="Enrollment Year" onChange={handleChange} required />
       
      </div>
     
        <input id="isActive" type="checkbox" name="isActive" onChange={handleChange} />
        <label htmlFor="isActive"> Active</label>
     
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default AddStudent;
