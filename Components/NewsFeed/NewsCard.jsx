import React from "react";
import modi from "../../Assets/modi&Oll.png";
import myImage from "../../Assets/4d616e616e.jpeg";
import Image from "next/image";

export const NewsCard = () => {
  return (
    <div className="container-xxl">
      <div className="card mb-3 p-2 border-0">
        <div className="row g-0">
          <div className="col-md-6">
            <Image src={modi} className="img-fluid rounded" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title fw-bold fs-4">
                It’s Nearly Impossible To Spend Less Than $10 On Movie
                Concessions{" "}
              </h5>
              <div className="d-flex gap-4 my-3 dp0">
                <Image
                  src={myImage}
                  alt=""
                  height="35"
                  width="35"
                  className="rounded-circle border"
                />
                <p className="mt-2 fw-bold">4d616e616e</p>
                <p className="mt-2 dp1">2 hours ago</p>
              </div>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mt-3 mb-2">
                <a
                  className="link-underline-opacity-0 link-danger"
                  href=""
                  onClick={() => console.log("Read more")}
                >
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
