import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { footerTitle, footerContent } from "../util/_footer";

export default function Footer() {
  return (
    <section id="footerSection" className="blue-content">
      <div className="container content">
        <div className="row">
          {footerTitle.map((title, index) => {
            return (
              <div className="col" key={index}>
                <h3 className="title">{title}</h3>
                {footerContent.map((content, index) => {
                  return (
                    <p key={index} className="text-content">
                      {content}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="content text-content footer-icon">
          <div className="row justify-content-center">
            <div className="footer-icon title">
              <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "2em" }} />
            </div>
            <div className="footer-icon title">
              <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "2em" }} />
            </div>
            <div className="footer-icon title">
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "2em" }} />
            </div>
          </div>
          <div className="col-6 mx-auto">
            <p className="content">
              ©{new Date().getFullYear()} Starmex.com.All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
