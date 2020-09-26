import React from "react";
import Background from "../img/1.png";

function HeaderContent() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <ol className="carousel-indicators">
        <li className="active"></li>
        <li></li>
        <li></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container-fluid">
            <div className="col-4" style={{ position: "absolute" }}>
              <h1> The Future Standard of Cryptocurrency Exchange</h1>
              <p>Lorem ipsum dolor sit amet sebuah kalimat</p>
              <button className="btn btn-outline-warning">Register Now</button>
            </div>
            <div>
              <img
                src={Background}
                style={{ zIndex: -1, position: "relative", display: "inline" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
