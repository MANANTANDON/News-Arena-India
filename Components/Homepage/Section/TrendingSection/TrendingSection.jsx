import React from "react";
import image2 from "../../../../Assets/getset.png";
import Image from "next/image";
import tsStyles from "../../../Styles/TrendingSection.module.css";

export const TrendingSection = () => {
  return (
    <React.Fragment>
      <div className="card border-0">
        <div className="row g-0">
          <div className="col-2 border-0">
            <Image
              src={image2}
              className="rounded mt-3"
              alt=""
              height={60}
              width={60}
            />
          </div>
          <div className="col-10 border-0">
            <div className="card-body">
              <p className={`card-text ${tsStyles.ts2}`}>
                TekTok Made Me Buy It Products You Shouldnt Sleep On
              </p>
              <p className={`text-body-secondary ${tsStyles.ts3}`}>
                Sept 10, 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
