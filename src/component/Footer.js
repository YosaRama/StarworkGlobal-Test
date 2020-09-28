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
    <section id="footerSection">
      <div className="container content">
        <div className="row">
          {footerTitle.map((title, index) => {
            return (
              <div className="col" key={index}>
                <h3>{title}</h3>
                {footerContent.map((content, index) => {
                  return <p key={index}>{content}</p>;
                })}
              </div>
            );
          })}
        </div>
        <div className="content">
          <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "2em" }} />
          <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "2em" }} />
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "2em" }} />
          <p className="content">
            ©{new Date().getFullYear()} Starmex.com.All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}
