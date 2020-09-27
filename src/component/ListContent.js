import React from "react";
import AddCryptoList from "../view/AddCryptoList";
import CryptoList from "../util/CryptoList";

export default function ListContent() {
  return (
    <div className="container-fluid">
      <div className="form-row">
        {CryptoList.map((item) => {
          return (
            <AddCryptoList
              model={item.model}
              currency={item.currency}
              ammount={item.ammount}
              plus={item.plus}
            />
          );
        })}
      </div>
    </div>
  );
}
