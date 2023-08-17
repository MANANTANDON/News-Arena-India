import React from "react";
import { NewsCard } from "./NewsCard";
import { Loadmore } from "../Extensions/Loadmore";
import lnStyles from "../Styles/LatestNews.module.css";

export const LatestNews = () => {
  const textaRr = [1, 2, 3, 4, 5, 6];
  return (
    <React.Fragment>
      <div className={`p-5 text-center bg-image ${lnStyles.ln1}`}>
        <div className="justify-content-center align-content-center">
          <div className="text-white fw-bold fs-1">
            Top Trending News This Week
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <h1 className="fw-bold my-5">Latest News</h1>
        {textaRr.map((item, key) => (
          <NewsCard key={key} />
        ))}
      </div>
      <Loadmore />
    </React.Fragment>
  );
};
