import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function AddCryptoTableBody(props) {
  let isRed = false;
  if (parseInt(props.change) < 0) {
    isRed = true;
  }
  return (
    <tr>
      <td className="title">
        <FontAwesomeIcon icon={props.rating} />
      </td>
      <td>{props.pair}</td>
      <td>{props.lastprice}</td>
      <td>{props.high}</td>
      <td>{props.low}</td>
      <td className={isRed ? "red-text" : "green-text"}>{props.change}</td>
      <td>{props.volume}</td>
    </tr>
  );
}
