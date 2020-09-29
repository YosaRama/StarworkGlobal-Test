import React from "react";
import NavItems from "../util/_navItems";
import AddNavItem from "../view/NavItem";
import Usa from "../img/united-kingdom.png";
import Ina from "../img/indonesia.png";

const { NLeft, NRight } = NavItems;

function Navs() {
  return (
    <section id="NavSection" className="blue-content">
      <nav className="navbar navbar-expand-lg ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <div className="col-8">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {NLeft.map((item, index) => {
                return <AddNavItem key={index} title={item} />;
              })}
            </ul>
          </div>
          <div className="col-4">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {NRight.map((item, index) => {
                return <AddNavItem key={index} title={item} />;
              })}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="L"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                >
                  <img src={Usa} style={{ width: "25px" }} alt="" />
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="L">
                    <div className="row">
                      <div className="col-2">
                        <img src={Usa} style={{ width: "25px" }} alt="" />
                      </div>
                      <div className="col-6">
                        <p> English </p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="L">
                    <div className="row">
                      <div className="col-2">
                        <img src={Ina} style={{ width: "25px" }} alt="" />
                      </div>
                      <div className="col-6">
                        <p> Indonesia </p>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navs;
