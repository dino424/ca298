import './App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// npm install bootstrap@5
// npm install bootstrap@next
// npm install bootstrap@5.1.3
// // 

function App() {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Welcome to My Uni System</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link to="/alldegrees" className="card-link">View All Degrees</Link>
            </li>
            <li className="list-group-item">
              <Link to="/allcohorts" className="card-link">View All Cohorts</Link>
            </li>
            <li className="list-group-item">
              <Link to="/allmodules" className="card-link">View All Modules</Link>
            </li>
            <li className="list-group-item">
              <Link to="/cohortmodules" className="card-link">View Cohort Modules</Link>
            </li>
            <li className="list-group-item">
              <Link to="/singledegree" className="card-link">View Single Degree</Link>
            </li>
            <li className="list-group-item">
              <Link to="/singlecohort" className="card-link">View Single Cohort</Link>
            </li>
            <li className="list-group-item">
              <Link to="/singlemodule" className="card-link">View Single Module</Link>
            </li>
            <li className="list-group-item">
              <Link to="/singlestudent" className="card-link">View Single Student</Link>
            </li>
            <li className="list-group-item">
              <Link to="/newdegree" className="card-link">Add New Degree</Link>
            </li>
            <li className="list-group-item">
              <Link to="/newcohort" className="card-link">Add New Cohort</Link>
            </li>
            <li className="list-group-item">
              <Link to="/newmodule" className="card-link">Add New Module</Link>
            </li>
            <li className="list-group-item">
              <Link to="/newstudent" className="card-link">Add New Student</Link>
            </li>
            <li className="list-group-item">
              <Link to="/newgrade" className="card-link">Add New Grade</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;