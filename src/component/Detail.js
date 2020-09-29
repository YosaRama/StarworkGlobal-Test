import React from "react";
import detailItem from "../util/_detail";
import AddDetailItem from "../view/DetaiItem";

export default function Detail() {
  return (
    <section id="detailSection" className="blue-content">
      <div className="container content">
        <h1 className="content title">Why Starmex Exchange?</h1>
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
    </section>
  );
}
