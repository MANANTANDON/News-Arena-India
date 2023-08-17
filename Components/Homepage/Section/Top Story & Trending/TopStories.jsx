import React from "react";
import imageOne from "../../../../Assets/image1.png";
import tstyles from "../../../Styles/TopStories.module.css";
import Image from "next/image";
import { Trending } from "./Trending";
import { BreakingNews } from "../Breaking News/BreakingNews";
import { NewsFeed } from "../NewsFeed/Newsfeed";
import { Sports } from "../Sports/Sports";
// import { BreakingNews } from "../Breaking News/BreakingNews";
// import { NewsFeed } from "../NewsFeed/NewsFeed";
// import { Sports } from "../Sports/Sports";

export const TopStories = () => {
  return (
    <React.Fragment>
      <div>
        <div className="container-xxl">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="card border-0 pt-5">
              <div className="card-body">
                <a href="#" className={`btn ${tstyles.sc2}`}>
                  Top Stories
                </a>
                <h1 className="card-title mt-3">
                  Explore Russia with Ease: Electronic Visa for Indian Passport
                  Holders...
                </h1>
                <p className="card-text mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut.
                </p>
                <p className="mt-3 mb-3">
                  <a className="link-underline-opacity-0 link-danger" href="#">
                    see more
                  </a>
                </p>
                <Image src={imageOne} className="card-img-bottom" alt="" />
              </div>
            </div>
            <Trending />
          </div>
        </div>
        <BreakingNews />
        <NewsFeed />
        <Sports />
        <Sports />
      </div>
    </React.Fragment>
  );
};
