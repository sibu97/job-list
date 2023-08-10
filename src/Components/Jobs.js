import React from 'react';
import "./Jobs.css";
import data from "../JobListData/data.json";
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Jobs() {

    

  return (
    <div>
      <div className="jobContainer" id="jobContainer">
        <h1>Current Job Openings</h1>
        <p>We are hiring!</p>
        <div className="jobList">
          {data.map((data,index) => {
            return (
              <div className="jobs" key={index}>
                <h3 className="title">{data.title}</h3>
                <h4 className="subtitle">{data.subtitle}</h4>
                <hr />

                {data.skills.map((skill) => {
                  return (
                    <ul className="skills">
                      <li>{skill}</li>
                    </ul>
                  );
                })}
        
                <Link to={`/Career/${data.id}`}>
                    <button className="detailBtn">View Details</button>
                </Link>
               
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Jobs