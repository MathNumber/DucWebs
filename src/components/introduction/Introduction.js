import React from "react";
import "./introduction.scss";
function Introduction() {
  return (
    <div className="introduction" id="introduction">
      <div className="introduction__container ">
        <div data-aos="fade-right" className="introduction__container-text">
          <p className="introduction__container-text-title">
            Một số thông tin của tôi
          </p>
          <ul className="introduction__container-text-info">
            <li className="introduction__container-text-info-flex">
              <span className="introduction__container-text-info-detail">
                Tên:
              </span>{" "}
              <span className="introduction__container-text-info-detail-1">
                Nguyễn Đức
              </span>
            </li>
            <li className="introduction__container-text-info-flex">
              <span className="introduction__container-text-info-detail">
                Ngày Sinh:
              </span>{" "}
              <span className="introduction__container-text-info-detail-2">
                21/01/2003
              </span>
            </li>
            <li className="introduction__container-text-info-flex">
              <span className="introduction__container-text-info-detail">
                Quê quán:
              </span>{" "}
              <span className="introduction__container-text-info-detail-3">
                Thừa Thiên Huế
              </span>
            </li>
            <li className="introduction__container-text-info-flex">
              <span className="introduction__container-text-info-detail">
                Email:
              </span>{" "}
              <span className="introduction__container-text-info-detail-4">
                ducnde170153@fpt.edu.vn
              </span>
            </li>
            <li className="introduction__container-text-info-flex">
              <span className="introduction__container-text-info-detail">
                SĐT:{" "}
              </span>{" "}
              <span className="introduction__container-text-info-detail-5">
                0334354648
              </span>
            </li>
          </ul>
          <button className="introduction__container-text-cv">
            <a href="assets/NguyenDuc-DE170153.png">Xem CV</a>
          </button>
        </div>
        <div data-aos="fade-right" className="introduction__container-img">
          <img src="assets/duc2.jpg" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
