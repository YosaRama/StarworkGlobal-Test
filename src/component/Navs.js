import React from "react";
import NavItems from "../util/_navItems";
import AddNavItem from "../view/NavItem";

const { NLeft, NRight } = NavItems;

function Navs() {
  return (
    <nav className="row">
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
        </ul>
      </div>
    </nav>
  );
}

export default Navs;
