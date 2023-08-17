import React from "react";
import myImage from "../../../../Assets/4d616e616e.jpeg";
import lalu from "../../../../Assets/lalu.png";
import Image from "next/image";

export const BreakingNewsCards = () => {
  const userDeets = (
    <div className="d-flex flex-row mt-4">
      <Image
        src={myImage}
        alt=""
        height="40"
        width="40"
        className="rounded-circle border"
      />
      <div className="mt-2 ms-4 fw-bold">4d616e616e</div>
      <div className="mt-2 ms-4" style={{ color: "#666666" }}>
        Aug 10, 2023
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <div className="col">
        <div className="card p-3 border-0">
          <Image src={lalu} alt="" className="card-image-top rounded" />
          <p className="card-title fw-bold mt-3 fs-3">
            Samosa & Lalu: Jab tak Samose mein rhega Aloo tbtk Bihar mein rhega
            Lalu
          </p>
          {userDeets}
          <p className="card-text mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <p className="mt-3 mb-2">
            <a className="link-underline-opacity-0 link-danger" href="#">
              Read more
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
