import React from "react";
import AddCryptoList from "../view/CryptoList";
import CryptoList from "../util/_cryptoList";

export default function ListContent() {
  return (
    <section id="listContentSection">
      <div className="container content">
        <div className="form-row">
          {CryptoList.map((item, index) => {
            return (
              <AddCryptoList
                key={index}
                model={item.model}
                currency={item.currency}
                ammount={item.ammount}
                plus={item.plus}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
