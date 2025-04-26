import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './table.css'; // <-- imported the CSS

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('https://assignment-backend-6xq9.onrender.com/students')
      .then(res => setStudents(res.data))
      .catch(console.error);
  }, []);

  const deleteStudent = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (confirmDelete) {
      axios.delete(`https://assignment-backend-6xq9.onrender.com/students/${id}`)
        .then(() => setStudents(prev => prev.filter(s => s._id !== id)))
        .catch(console.error);
    }
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-GB'); // DD/MM/YYYY
  };

  return (
    <div className="student-container">
      <div className="student-header">
        <h2>Student Records</h2>
        
      </div>
      <div className="table-fluid">
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Dept.</th>
            <th>Enroll Year</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="9" className="no-data">No students found.</td>
            </tr>
          ) : (
            students.map((s, i) => (
              <tr key={s._id}>
                <td>{i + 1}</td>
                <td>{s.firstName}</td>
                <td>{s.lastName}</td>
                <td>
                  <a href={`mailto:${s.email}`} className="email-link">
                    {s.email}
                  </a>
                </td>
                <td>{formatDate(s.dob)}</td>
                <td>{s.dept}</td>
                <td>{s.enrollYear}</td>
                <td className="checkbox-center">
                  <input type="checkbox" checked={s.isActive} readOnly />
                </td>
                <td className="action-buttons">
                  <Link to={`/edit/${s._id}`} className="edit-button">Edit</Link>
                  <button onClick={() => deleteStudent(s._id)} className="delete-button">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default StudentList;
