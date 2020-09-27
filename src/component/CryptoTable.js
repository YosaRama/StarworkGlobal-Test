import React from "react";
import { CryptoTableBody, CryptoTableHeader } from "../util/_cryptoTableBody";
import AddCryptoTableBody from "../view/CryptoTableBody";

export default function CryptoTable() {
  return (
    <div className="container-fluid">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            {CryptoTableHeader.map((header, index) => {
              return <th key={index}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {CryptoTableBody.map((item, index) => {
            const [HHigh, HLow, HChange, HVolume] = item.hour;
            return (
              <AddCryptoTableBody
                key={index}
                rating={item.rating}
                pair={item.pair}
                lastprice={item.lastprice}
                high={HHigh}
                low={HLow}
                change={HChange}
                volume={HVolume}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
