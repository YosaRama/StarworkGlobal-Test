import React from "react";

export default function AddCryptoTableBody(props) {
  return (
    <tr>
      <td>{props.rating}</td>
      <td>{props.pair}</td>
      <td>{props.lastprice}</td>
      <td>{props.high}</td>
      <td>{props.low}</td>
      <td>{props.change}</td>
      <td>{props.volume}</td>
    </tr>
  );
}
