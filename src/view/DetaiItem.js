import React from "react";

export default function DetailItem(props) {
  return (
    <div className="col-6 content">
      <div className="row align-items-center">
        <div className="col-5">
          <img className="w-100" src={props.icon} alt="" />
        </div>
        <div className="col-6 detail-content">
          <h3 className="title">{props.title}</h3>
          <p className="text-content">{props.content}</p>
        </div>
      </div>
    </div>
  );
}
