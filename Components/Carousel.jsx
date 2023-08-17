import React from "react";
import { Button } from "./Extensions/Button";
import cStyle from "./Styles/carousel.module.css";

export const Carousel = () => {
  const menuArr = [
    "Politics",
    "Economy",
    "Ground Report",
    "Explainers",
    "Spotlight",
    "FramePolls",
    "Memes",
    "Quizzes",
    "Interviews",
    "BooksArt",
  ];
  return (
    <React.Fragment>
      <nav className="navbar bg-body-tertiary h-4">
        <div className="container-fluid overflow-x-auto">
          <div className="d-flex ms-5 mt-2 mb-2 ">
            {menuArr.map((item, key) => (
              <div key={key} className="ms-4">
                <Button buttonText={item} />
              </div>
            ))}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
