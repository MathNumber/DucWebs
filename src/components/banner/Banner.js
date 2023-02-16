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
      <div className="banner__container">
        <div data-aos="fade-down" className="banner__container-text">
          <h1 className="banner__container-text-subheading">Xin chào!</h1>
          <h1 className="banner__container-text-full">Tôi tên là</h1>
          <h1 className="banner__container-text-name">Nguyễn Đức</h1>
          <h2 className="banner__container-text-info">
            Đang học <span ref={textRef}></span>
          </h2>
        </div>
        <div data-aos="fade-down" className="banner__container-img">
          <div>
            <img src="assets/duc.jpg" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
