import React from 'react';
import img from "../media/body.jpg";
import "./Home.css";
import Jobs from './Jobs';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <main>
        <div className="bodyImg">
          <img alt="body img" src={img} />
        </div>

        <div className="mainContent">
          <h2>Peppermint Robotics</h2>
          <h1>Join us if you</h1>
          <p>
            are excited to experience the magic of collective consciousness.
          </p>
          <a href="#jobContainer">
            <button>View Job Openings</button>
          </a>
        </div>
      </main>
      <Jobs />
    </div>
  );
}

export default Home