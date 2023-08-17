import React from "react";
//styles
import sStyles from "../../../Styles/Sports.module.css";
//images
import lebron from "../../../../Assets/lb.jpg";
import Image from "next/image";

export const Sports = () => {
  const testText = ["Sports Video"];
  const testArr = [1, 2, 3, 4, 5];
  return (
    <React.Fragment>
      <div className="container-xxl mb-5">
        <div className={`card border-0 mt-5 ${sStyles.s1} fw-bold`}>
          {testText[0]}
        </div>
        <div className="row row-cols-md-5">
          {testArr.map((item, key) => (
            <div className="card border-0 text-white mt-5" key={key}>
              <Image
                className="card-img"
                src={lebron}
                alt=""
                height={450}
                width={300}
              />
              <div className="card-img-overlay">
                <h5 className="card-title">WATCH</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
