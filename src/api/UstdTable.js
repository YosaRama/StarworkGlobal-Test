import { useState, useEffect } from "react";
import Axios from "axios";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function UstdTable() {
  const [Table, setTable] = useState([]);
  useEffect(() => {
    Axios({
      async: true,
      crossDomain: true,
      url:
        "https://coingecko.p.rapidapi.com/coins/markets?page=1&per_page=10&order=market_cap_desc&vs_currency=usd",
      method: "GET",
      headers: {
        "x-rapidapi-host": "coingecko.p.rapidapi.com",
        "x-rapidapi-key": "263ef54c74mshaf2469e5f43e457p138478jsne1daf7d36ad0",
      },
    })
      .then((response) => {
        setTable(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return Table.map((item) => {
    return {
      rating: faStar,
      pair: item.name,
      lastprice: item.current_price,
      high: item.high_24h,
      low: item.low_24h,
      change: item.price_change_percentage_24h + "%",
      volume: item.total_volume,
    };
  });
}
