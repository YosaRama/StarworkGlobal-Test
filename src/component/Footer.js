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
    <div className="container">
      <div className="row">
        {footerTitle.map((title, index) => {
          return (
            <div className="col">
              <h3 key={index}>{title}</h3>
              {footerContent.map((content, index) => {
                return <p key={index}>{content}</p>;
              })}
            </div>
          );
        })}
      </div>
      <div>
        <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "2em" }} />
        <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "2em" }} />
        <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "2em" }} />
        <p>©{new Date().getFullYear()} Starmex.com.All rights reserved</p>
      </div>
    </div>
  );
}
