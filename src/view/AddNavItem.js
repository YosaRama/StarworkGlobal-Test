import React from "react";

export default function AddNavItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link active" href="lo">
        {props.title}
      </a>
    </li>
  );
}
