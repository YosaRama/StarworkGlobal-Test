import React from "react";
import detailItem from "../util/_detail";
import AddDetailItem from "../view/DetaiItem";

export default function Detail() {
  return (
    <div className="container">
      <h1>Why Starmex Exchange?</h1>
      <div className="form-row">
        {detailItem.map((item, index) => {
          return (
            <AddDetailItem
              key={index}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
}
