import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import UstdTable from "../api/UstdTable";
import { CryptoTableBody, CryptoTableHeader } from "../util/_cryptoTableBody";
import AddCryptoTableBody from "../view/CryptoTableBody";

export default function CryptoTable() {
  const [TableBody, setTableBody] = useState(CryptoTableBody);

  function StarXClick() {
    setTableBody(CryptoTableBody);
  }

  const USTD = UstdTable();

  function UstdClick() {
    setTableBody(USTD);
  }

  function FavoriteClick() {
    setTableBody(
      CryptoTableBody.filter((item) => (item.rating === faStar)).map(
        (favItem) => favItem
      )
    );
  }
  return (
    <section id="cryptoTableSection">
      <section id="cryptoTableHeader">
        <div className="container">
          <div className="row content">
            <h3 className="col" onClick={StarXClick}>
              STARX Markets
            </h3>
            <h3 className="col" onClick={UstdClick}>
              USDT Markets
            </h3>
            <h3 className="col" onClick={FavoriteClick}>
              <FontAwesomeIcon icon={faStar} />
              Favorite
            </h3>
            <input className="col" type="text" />
          </div>
        </div>
      </section>
      <section id="cryptoTableBody">
        <div className="container">
          <table className="table content">
            <thead className="thead-dark">
              <tr>
                {CryptoTableHeader.map((header, index) => {
                  return <th key={index}>{header}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {TableBody.map((item, index) => {
                return (
                  <AddCryptoTableBody
                    key={index}
                    rating={item.rating}
                    pair={item.pair}
                    lastprice={item.lastprice}
                    high={item.high}
                    low={item.low}
                    change={item.change}
                    volume={item.volume}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
