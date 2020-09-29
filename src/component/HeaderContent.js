import React from "react";
import Background from "../img/1.png";

function HeaderContent() {
  return (
    <section id="headerSection" className="blue-content">
      <div id="carouselExampleIndicators" className="carousel slide content">
        <ol className="carousel-indicators">
          <li className="active"></li>
          <li></li>
          <li></li>
        </ol>
        <div className="container-fluid">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-4 header-text">
                  <h1 className="title">
                    The Future Standard of Cryptocurrency Exchange
                  </h1>
                  <p className="text-content">
                    Lorem ipsum dolor sit amet sebuah kalimat
                  </p>
                  <button className="btn btn-outline-warning">
                    Register Now
                  </button>
                </div>
                <div className="col-8 header-image">
                  <img src={Background} style={{ zIndex: -1 }} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderContent;
