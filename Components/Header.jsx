import React, { useState } from "react";

//files import
import hStyles from "./Styles/Header.module.css";

//assets import
import logo from "../Assets/logo.png";

//material ui import
import { Search } from "@mui/icons-material";
import Image from "next/image";

export const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-xl bg-white">
        <div className="container">
          <a className="navbar-brand mt-3 mb-3" href="#">
            <Image src={logo} alt="" className="img-fluid col-12" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <div className="d-flex flex-row-reverse w-100 ">
              <button
                className={`${hStyles.hc5} btn rounded border-0 col-4 col-lg-2`}
              >
                Subscribe
              </button>
              <Search
                className={`${hStyles.searchIcon} searchIcon mt-2 me-4`}
                onClick={() => console.log(search)}
              />
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
