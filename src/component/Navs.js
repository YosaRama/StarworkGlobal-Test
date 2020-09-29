import React from "react";
import NavItems from "../util/_navItems";
import AddNavItem from "../view/NavItem";

const { NLeft, NRight } = NavItems;

function Navs() {
  return (
    <section id="NavSection">
      <nav className="row content">
        <div className="col-8">
          <ul className="nav">
            {NLeft.map((item, index) => {
              return <AddNavItem key={index} title={item} />;
            })}
          </ul>
        </div>
        <div className="col-4">
          <ul className="nav">
            {NRight.map((item, index) => {
              return <AddNavItem key={index} title={item} />;
            })}
            <li className="nav-item">
              <div className="dropdown">
                <a
                  className="dropdown-toggle"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  href="L"
                >
                  Language
                </a>

                <div className="dropdown-menu">
                  <a class="dropdown-item" href="L">
                    Indonesia
                  </a>
                  <a class="dropdown-item" href="L">
                    Germany
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navs;
