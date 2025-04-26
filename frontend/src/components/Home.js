import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
    

      {/* MAIN DASHBOARD */}
      <div className="home-container">
        <div className="home-box">
          <h1>Student Management System</h1>
          <p>Add a new student or browse existing records effortlessly.</p>
          <div className="home-actions">
            <Link to="/add" className="btn primary">Add Student</Link>
            <Link to="/view" className="btn outline"> View Students</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
