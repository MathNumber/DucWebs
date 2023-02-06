import React from "react";
import "./banner.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";
function Banner() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software Engineering", "Web Developer"],
    });
  }, []);
  return (
    <div id="banner" className="banner ">
      <div className="banner-container">
        <div data-aos="fade-down" className="banner-container-text">
          <h1 className="banner-container-text__subheading">Xin chào!</h1>
          <h1 className="banner-container-text__full">Tôi tên là</h1>
          <h1 className="banner-container-text__name">Nguyễn Đức</h1>
          <h2 className="banner-container-text__info">
            Đang học <span ref={textRef}></span>
          </h2>
        </div>
        <div data-aos="fade-down" className="banner-container__img">
          <div>
            <img src="assets/duc.png" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
