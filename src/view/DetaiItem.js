import React from "react";

export default function DetailItem(props) {
  return (
    <div className="col-6 content">
      <div className="row">
        <div className="col-3">
          <img className="w-100" src={props.icon} alt="" />
        </div>
        <div className="col-6 ">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}
