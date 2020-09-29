import React from "react";

export default function AddCryptoList(props) {
  return (
    <div className="col row align-items-center">
      <div className="col-4">
        <p className="list-name">{props.model}</p>
        <p>{props.currency}</p>
      </div>
      <div className="col">
        <h3 className="red-text">{props.ammount}</h3>
        <p className="green-text">{props.plus}</p>
      </div>
    </div>
  );
}
