import React from 'react';
import data from "../JobListData/data.json";
import {Link, useParams } from 'react-router-dom';
import "./JobDetail.css";

const JobDetail = () => {

    const {id}=useParams();
    const datas = data.find((d) => d.id == id);

  return (
    <div className="container">
      <div className="jobDetail">
        <div className='details'>
          <h1 className="title">{datas.subtitle}</h1>
          <hr />
          <p className="experience">
            <b>Experience: </b>
            {datas.experience}
          </p>
          <p className="openings">
            <b>Openings: </b>
            {datas.openings}
          </p>
          <p className="location">
            <b>Location: </b>
            {datas.location}
          </p>
          <h3>Specific Requirements include:</h3>
          {datas.responsibilities.map((res) => {
            return (
              <ul>
                <li>{res}</li>
              </ul>
            );
          })}

          <h3>Technical Skills Required:</h3>
          {datas.skills.map((skill) => {
            return (
              <>
                <ul>
                  <li>{skill}</li>
                </ul>
              </>
            );
          })}
          <Link to="/Career">
            <button className="btn" id="btn1">
              Back
            </button>
          </Link>

          <a href="https://docs.google.com/forms/d/1WwaIbgI0McLokj7VCgpDmgEnnJAi8bjZqnLkPdFqKwI/viewform?edit_requested=true">
            <button className="btn" id="btn2">
              Apply Form
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;