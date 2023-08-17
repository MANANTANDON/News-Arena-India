import React from "react";
import logo from "../Assets/logo.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <React.Fragment>
      <footer className="container-fuild bg-black pb-5">
        <div className="container-xxl text-white">
          <div className="row row-cols-lg-3 row-cols-1">
            <div className="col">
              <div className="card bg-transparent border-0 text-white">
                <Image
                  src={logo}
                  alt=""
                  className="img-fluid col-3 col-xl-6 col-lg-6 mt-5 mb-5"
                />
                <p>The Ideaz Factory</p>
                <p>admin@4d616e616e</p>
                <p>+91 9103536741</p>
              </div>
            </div>
            <div className="col mt-5">
              <div className="row">
                <div className="card col-4 col-sm-6 bg-transparent text-white">
                  <div className="card-title fw-bold fs-5">Categories</div>
                  <div className="mt-4">International</div>
                  <div className="mt-4">Regional</div>
                  <div className="mt-4">Politics</div>
                  <div className="mt-4">Business</div>
                  <div className="mt-4">Sports</div>
                </div>
                <div className="card col-4 col-sm-6 bg-transparent text-white">
                  <div className="card-title fw-bold fs-5 ">Company</div>
                  <div className="mt-4">Service</div>
                  <div className="mt-4">Features</div>
                  <div className="mt-4">Our Team</div>
                  <div className="mt-4">Portfolio</div>
                  <div className="mt-4">Blog</div>
                </div>
              </div>
            </div>
            <div className="col mt-5">
              <div className="card bg-transparent text-white">
                <div className="card-title fw-bold fs-5 ">Social Media</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
