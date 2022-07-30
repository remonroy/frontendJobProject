import React, { useState } from "react";
import "./Service.css";
import service from "../image/Software.jpg";
import { FaSpaceShuttle } from "react-icons/fa";

const Service = () => {
  const [spaceCrapet, setSpaceCrapet] = useState(true);
  // onMouseLeave={() => setSpaceCrapet(!spaceCrapet)}
  // {spaceCrapet ? "spaceIcon" : "spaceIcon2"}
  // console.log("spaceCrapet", spaceCrapet);
  return (
    <section>
      <div className={spaceCrapet ? "spaceIcon" : "spaceIcon2"}>
        <FaSpaceShuttle />
      </div>
      <div className="serviceD">
        <h3>Services</h3>
        <h4>We provides services to our clients</h4>

        <div className="services">
          <button onMouseLeave={() => setSpaceCrapet(!spaceCrapet)}>
            <div>
              <img src={service} alt="" />
              <h4>Software Solution</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                id expedita eligendi itaque at ut eum architecto sit, fugit odit
                quas dignissimos doloremque tempora fuga sint rem cum delectus
                voluptate.
              </p>
              <div className="btnM">
                <button className="more">MORE</button>
              </div>
            </div>
          </button>
          <button onMouseLeave={() => setSpaceCrapet(!spaceCrapet)}>
            <div>
              <img src={service} alt="" />
              <h4>Software Solution</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                id expedita eligendi itaque at ut eum architecto sit, fugit odit
                quas dignissimos doloremque tempora fuga sint rem cum delectus
                voluptate.
              </p>
              <div className="btnM">
                <button className="more">MORE</button>
              </div>
            </div>
          </button>
          <button onMouseLeave={() => setSpaceCrapet(!spaceCrapet)}>
            <div>
              <img src={service} alt="" />
              <h4>Software Solution</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                id expedita eligendi itaque at ut eum architecto sit, fugit odit
                quas dignissimos doloremque tempora fuga sint rem cum delectus
                voluptate.
              </p>
              <div className="btnM">
                <button className="more">MORE</button>
              </div>
            </div>
          </button>
          <button onMouseLeave={() => setSpaceCrapet(!spaceCrapet)}>
            <div>
              <img src={service} alt="" />
              <h4>Software Solution</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                id expedita eligendi itaque at ut eum architecto sit, fugit odit
                quas dignissimos doloremque tempora fuga sint rem cum delectus
                voluptate.
              </p>
              <div className="btnM">
                <button className="more">MORE</button>
              </div>
            </div>
          </button>
          <button onMouseLeave={() => setSpaceCrapet(!spaceCrapet)}>
            <div>
              <img src={service} alt="" />
              <h4>Software Solution</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                id expedita eligendi itaque at ut eum architecto sit, fugit odit
                quas dignissimos doloremque tempora fuga sint rem cum delectus
                voluptate.
              </p>
              <div className="btnM">
                <button className="more">MORE</button>
              </div>
            </div>
          </button>
          <button onMouseLeave={() => setSpaceCrapet(!spaceCrapet)}>
            <div>
              <img src={service} alt="" />
              <h4>Software Solution</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                id expedita eligendi itaque at ut eum architecto sit, fugit odit
                quas dignissimos doloremque tempora fuga sint rem cum delectus
                voluptate.
              </p>
              <div className="btnM">
                <button className="more">MORE</button>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
