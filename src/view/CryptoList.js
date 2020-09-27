import React from "react";

export default function AddCryptoList(props) {
  return (
    <div className="col row">
      <div className="col-4">
        <p>{props.model}</p>
        <p>{props.currency}</p>
      </div>
      <div className="col">
        <h3>{props.ammount}</h3>
        <p>{props.plus}</p>
      </div>
    </div>
  );
}
