import React from "react";
import "./introduction.scss";
function Introduction() {
  return (
    <div className="introduction" id="introduction">
      <div className="introduction-container ">
        <div data-aos="fade-right" className="introduction-container-text">
          <p className="introduction-container-text__title">
            Một số thông tin của tôi
          </p>
          <ul className="introduction-container-text-info">
            <li className="introduction-container-text-info__flex">
              <span className="introduction-container-text-info__detail">
                Tên:
              </span>{" "}
              <span className="introduction-container-text-info__detail-1">
                Nguyễn Đức
              </span>
            </li>
            <li className="introduction-container-text-info__flex">
              <span className="introduction-container-text-info__detail">
                Ngày Sinh:
              </span>{" "}
              <span className="introduction-container-text-info__detail-2">
                21/01/2003
              </span>
            </li>
            <li className="introduction-container-text-info__flex">
              <span className="introduction-container-text-info__detail">
                Quê quán:
              </span>{" "}
              <span className="introduction-container-text-info__detail-3">
                Thừa Thiên Huế
              </span>
            </li>
            <li className="introduction-container-text-info__flex">
              <span className="introduction-container-text-info__detail">
                Email:
              </span>{" "}
              <span className="introduction-container-text-info__detail-4">
                ducnde170153@fpt.edu.vn
              </span>
            </li>
            <li className="introduction-container-text-info__flex">
              <span className="introduction-container-text-info__detail">
                SĐT:{" "}
              </span>{" "}
              <span className="introduction-container-text-info__detail-5">
                0334354648
              </span>
            </li>
          </ul>
          <button className="introduction-container-text__cv">
            <a href="assets/NguyenDuc-DE170153.PNG">Xem CV</a>
          </button>
        </div>
        <div data-aos="fade-right" className="introduction-container__img">
          <img src="assets/duc2.jpg" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
