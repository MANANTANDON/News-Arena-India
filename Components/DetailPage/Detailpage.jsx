import React from "react";
import image1 from "../../Assets/getset.png";
import icon1 from "../../Assets/icon1.png";
import myImage from "../../Assets/4d616e616e.jpeg";
import dpStyles from "../Styles/Detailpage.module.css";
import { BreakingNewsTwo } from "../HomePage/Section/Breaking News/BreakingNewsTwo";
import Image from "next/image";
import { TrendingSection } from "../Homepage/Section/TrendingSection/TrendingSection";
import { Loadmore } from "../Extensions/Loadmore";

export const DetailPage = () => {
  const testArr = [1, 2, 3, 4, 5, 6];

  const AdCont = (
    <div
      className={`card bg-body-tertiary ${dpStyles.dpAd} text-center fw-bold fs-1 justify-content-center`}
    >
      Ads
    </div>
  );
  const userDeets = (
    <div className={`d-flex gap-3 ${dpStyles.dp0}`}>
      <Image
        src={myImage}
        alt=""
        height="35"
        width="35"
        className="rounded-circle border"
      />
      <p className="mt-2 fw-bold">4d616e616e</p>
      <p className={`mt-2 ${dpStyles.dp1}`}>Aug 10, 2023</p>
      <p className="mt-2">12K</p>
      <p className="mt-2">20</p>
    </div>
  );

  const commentSectionDeets = (
    <div className={`d-flex gap-2 ${dpStyles.dp0}`}>
      <Image
        src={myImage}
        alt=""
        height="35"
        width="35"
        className="rounded-circle border"
      />
      <p className="mt-2 fw-bold">4d616e616e</p>
      <p className={`mt-2 ${dpStyles.dp1}`}>2 hours ago</p>
    </div>
  );
  return (
    <React.Fragment>
      <div className="container-xxl">
        <div className="card border-0">
          <div className="card-body">
            <Image src={image1} alt="" className="card-img-top" />
            <div className="row my-5">
              {/* Left Card */}
              <div className="card col-lg-8 border-0 p-1">
                <div className="card-title d-flex g-sm-5">
                  <p className="fw-bold fs-1 col-lg-8">
                    5-Minute Meditation You Can Do Anywhere
                  </p>
                  <p className="col-lg-4">
                    <Image
                      src={icon1}
                      alt=""
                      className={`float-end ${dpStyles.dp7}`}
                      height={17}
                      width={17}
                    />
                  </p>
                </div>
                {userDeets}
                <p className={`text-emphasis-dark ${dpStyles.dp2}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                  <br />
                  <br /> Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                </p>
                <Image src={image1} alt="" className="mt-2" />
                <p className="card-text text-center fw-bold py-4">
                  {" "}
                  Photo By ilham
                </p>
                <p className={dpStyles.dp2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
                <hr className="border border-danger opacity-50" />
                {/* comment section */}
                <div className="card-title">
                  <p className="fw-bold fs-1">Comment</p>
                  <div className="card col border-0">
                    <div
                      className={`card-text ${dpStyles.dp3} text-black border border-danger rounded-top p-3`}
                    >
                      {commentSectionDeets}
                    </div>
                    <div
                      className={`card-text ${dpStyles.dp4} rounded-bottom p-3`}
                    >
                      {commentSectionDeets}
                    </div>
                  </div>
                </div>
                <textarea
                  className={`rounded p-3 ${dpStyles.dp6} mt-4`}
                  placeholder="Any question for this product?"
                  required
                ></textarea>
                <button
                  className={`${dpStyles.dp5} col-3 col-xxl-2 border-0 rounded text-white py-2 mt-3`}
                >
                  send
                </button>
              </div>
              {/* Right Card */}
              <div className="card col-lg-4 border-0">
                {/* AD CONT START */}
                {AdCont}
                {/* AD CONT END */}
                <div className="card-title fw-bold fs-2 p-2 mt-5">
                  Trending Now
                  {testArr.map((item, key) => (
                    <TrendingSection key={key} />
                  ))}
                </div>
                {/* AD CONT START */}
                {AdCont}
                {AdCont}
                {/* AD CONT END */}
              </div>
            </div>
          </div>
        </div>
        <BreakingNewsTwo />
        <Loadmore />
      </div>
    </React.Fragment>
  );
};
