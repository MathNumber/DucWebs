import React from "react";
import "./projects.scss";
function Projects() {
  return (
    <div className="project" id="project">
      <div className="project__container ">
        <h2
          data-aos="fade-up"
          data-aos-duration="3000"
          className="project__container-title"
        >
          Các dự án của tôi
        </h2>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="project__container-row-1"
        >
          <div className="project__container-row-1v">
            <p className="project__container-row-1v-info-1">
              Note app là một ứng dụng mà bạn có thể ghi chú lại những việc muốn
              làm.
            </p>
            <img
              className="project__container-row-1v-img-1"
              src="assets/2023-01-06_184659.png"
              alt={"logo"}
            ></img>
            <div className="project__container-row-1v-caption-1">
              <div className="project__container-row-1v-blur"></div>
              <div className="project__container-row-1v-caption-text">
                <a href="https://notes-bs7t5m15k-mathnumber.vercel.app/">
                  Nhấn để xem thêm
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="project__container-row-2"
        >
          <div className="project__container-row-2v">
            <p className="project__container-row-2v-info-2">
              Bộ chuyển đổi đơn vị cho phép bất kỳ người dùng chuyển đổi nhanh
              chóng giữa đơn vị đo lường.
            </p>
            <img
              className="project__container-row-2v-img-2"
              src="assets/2023-01-06_184805.png"
              alt={"logo"}
            ></img>
            <div className="project__container-row-2v-caption-2">
              <div className="project__container-row-2v-blur"></div>
              <div className="project__container-row-2v-caption-text">
                <a href="https://mathnumber.github.io/Convert/">
                  Nhấn để xem thêm
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="project__container-row-3"
        >
          <div className="project__container-row-3v">
            <p className="project__container-row-3v-info-3">
              Nhân bản trang web của Macintosh, dự án này được thực hiện trong
              thời gian đầu tôi học HTML/CSS/JS.
            </p>
            <img
              className="project__container-row-3v-img-3"
              src="assets/2023-01-06_184841.png"
              alt={"logo"}
            ></img>
            <div className="project__container-row-3v-caption-3">
              <div className="project__container-row-3v-blur"></div>
              <div className="project__container-row-3v-caption-text">
                <a href="https://mathnumber.github.io/Macintosh/">
                  Nhấn để xem thêm
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="project__container-row-4"
        >
          <div className="project__container-row-4v">
            <p className="project__container-row-4v-info-4">
              Facebook cho phép người dùng đăng tải, chia sẻ những suy nghĩ,
              hình ảnh, video về cuộc sống của mình .
            </p>
            <img
              className="project__container-row-4v-img-4"
              src="assets/2023-01-06_191549.png"
              alt={"logo"}
            ></img>
            <div className="project__container-row-4v-caption-4">
              <div className="project__container-row-4v-blur"></div>
              <div className="project__container-row-4v-caption-text">
                <a href="https://www.facebook.com/">Nhấn để xem thêm</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
