import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import UstdTable from "../api/UstdTable";
import { CryptoTableBody, CryptoTableHeader } from "../util/_cryptoTableBody";
import AddCryptoTableBody from "../view/CryptoTableBody";

export default function CryptoTable() {
  const [TableBody, setTableBody] = useState(CryptoTableBody);
  const [Search, setSearch] = useState("");

  function StarXClick() {
    setTableBody(CryptoTableBody);
  }

  const USTD = UstdTable();

  function UstdClick() {
    setTableBody(USTD);
  }

  function FavoriteClick() {
    setTableBody(
      CryptoTableBody.filter((item) => item.rating === faStar).map(
        (favItem) => favItem
      )
    );
  }

  function onSearch() {
    setTableBody(
      TableBody.filter((item) => {
        return item.pair.toLowerCase().match(Search.toLowerCase());
      }).map((i) => i)
    );
  }

  return (
    <section id="cryptoTableSection">
      <section id="cryptoTableHeader" className="blue-content">
        <div className="container">
          <div className="row content title">
            <h3 className="col table-sort" onClick={StarXClick}>
              STARX Markets
            </h3>
            <h3 className="col table-sort" onClick={UstdClick}>
              USDT Markets
            </h3>
            <h3 className="col table-sort" onClick={FavoriteClick}>
              <FontAwesomeIcon icon={faStar} />
              Favorite
            </h3>
            <input
              className="col search-box"
              type="text"
              placeholder="&#xF002;  Search ..."
              onChange={(e) => {
                e.preventDefault();
                setSearch(e.target.value);
              }}
              value={Search}
              onKeyUp={onSearch}
            />
          </div>
        </div>
      </section>
      <section id="cryptoTableBody">
        <div className="container table-responsive">
          <table className="table content">
            <thead>
              <tr className="title">
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
