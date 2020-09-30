import React from "react";

export default function AddNavItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={"#" + props.title + "Section"}>
        {props.title}
      </a>
    </li>
  );
}
