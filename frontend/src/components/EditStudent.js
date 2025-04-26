import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    dept: '',
    enrollYear: '',
    isActive: false,
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/students/${id}`)
      .then(res => setForm(res.data))
      .catch(err => console.error('Failed to fetch student:', err));
  }, [id]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:5000/students/${id}`, form)
      .then(() => navigate('/view'))
      .catch(err => {
        console.error('Update failed:', err);
        alert('Failed to update student.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Edit Student</h2>
      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <label>Date of Birth:</label>
      <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
      <input name="dept" value={form.dept} onChange={handleChange} placeholder="Department" required />
      <input type="number" name="enrollYear" value={form.enrollYear} onChange={handleChange} placeholder="Enrollment Year" required />
      <div className="checkbox-group">
        <input type="checkbox" name="isActive" checked={form.isActive} onChange={handleChange} />
        <label> Active</label>
      </div>
      <button type="submit" className="btn btn-primary">Update</button>
    </form>
  );
};

export default EditStudent;
