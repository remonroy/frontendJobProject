import React, { useState } from "react";
import "./Home.css";
import { FaSpaceShuttle } from "react-icons/fa";

const Home = () => {
  const [over, setOver] = useState(true);

  return (
    <section className="headerWelcome">
      <div>
        <div className="space">
          {/* <button onMouseOver={handle}>
          </button> */}
          <FaSpaceShuttle
            onMouseOver={() => setOver(!over)}
            className="paceSvg"
          />

          <FaSpaceShuttle className={over ? "spaceSvg2" : "spaceSvg3"} />
        </div>
        <h1>Welcome to</h1>
        <h2>Globetech</h2>
        <p>
          We are committed to deliver <span>best IT services</span> .Our
          consultants have experience in working with clients.We have extensive
          experience in the software application sapce and also offer a broad
          range and depth of technology
        </p>
        <div className="headerLink">
          <a className="support" href="">
            Support us
          </a>
          <a href="">Our Mission</a>
        </div>
      </div>
      <div className="worldSection">
        <div className="first">
          <div className="second">
            <div className="third">
              <div className="four"></div>
            </div>
          </div>
          <di className="hoverE">
            <div className="oneE">
              <div className="twoE">
                <div className="threeE">
                  <div className="fourE">
                    <div className="fiveE">
                      <div className="sixE"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </di>
        </div>
      </div>
    </section>
  );
};

export default Home;
