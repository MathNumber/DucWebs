import React from "react";
import "./contact.scss";
function Contact() {
  return (
    <div className="contact" id="contact">
      <div data-aos="fade-up">
        <h2 className="contact__title">Liên hệ tôi</h2>
      </div>

      <div data-aos="fade-up" className="contact-container">
        <div className="contact-container-info">
          <div className="contact-container-info-1">
            <div className="contact-container-info-1__border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#3C3E48"
                class="contact-container-info-1__icon"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
              </svg>
            </div>
            <h3 className="contact-container-info-1__address">Địa chỉ</h3>
            <p className="contact-container-info-1__detail_1">
              Phú Dương, Phú Vang, Thừa Thiên Huế
            </p>
          </div>

          <div className="contact-container-info-2">
            <div className="contact-container-info-2__border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#3C3E48"
                class="contact-container-info-2__icon"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
            </div>
            <h3 className="contact-container-info-2__phone">
              Điện thoại liên lạc
            </h3>
            <p className="contact-container-info-2__detail_2">0334354648</p>
          </div>

          <div className="contact-container-info-3">
            <div className="contact-container-info-3__border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#3C3E48"
                class="contact-container-info-3__icon"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </div>
            <h3 className="contact-container-info-3__email">Địa chỉ email</h3>
            <p className="contact-container-info-3__detail_3">
              ducnde170153@fpt.edu.vn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
