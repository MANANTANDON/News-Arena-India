import React from "react";
import lm from "../Styles/Detailpage.module.css";

export const Loadmore = () => {
  return (
    <React.Fragment>
      <div className="card text-center border-0 my-5">
        <div className="card-body">
          <a className={`btn ${lm.dp5} text-white border-0 py-3 px-5 rounded`}>
            Load More
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};
