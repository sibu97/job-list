import "./Footer.css";
import { BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";

function Footer(){
    return (
      <>
        <div className="about-container">
          <h1>About Peppermint</h1>
          <p>
            Peppermint is an award-winning robotics company, supported by SINE
            IIT-Bombay and Qualcomm. Peppermint develops and deploys Industrial
            and Enterprise robots and platforms for mobility-led services. The
            Engineering team has 50+ years of experience in building deep-tech
            and robotics products. Robots built on the Peppermint Platform are
            deployed across 13 cities in 4 countries!
          </p>
          <h2>Connect</h2>
          <div className="footerIcons">
            <a href="https://twitter.com/getpeppermint">
              <BsTwitter />
            </a>
            <a href="https://www.linkedin.com/company/getpeppermint/">
              <BsLinkedin />
            </a>
            <a href="https://www.youtube.com/@PeppermintRobotics">
              <BsYoutube />
            </a>
          </div>
          <p>Stay and touch with us</p>
        </div>
        <hr />
        <div className="footer">
          <p>getpeppermint &#169; 2023.All rights reserved</p>
        </div>
      </>
    );
}

export default Footer;