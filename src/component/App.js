import React from "react";
import Navs from "./Navs";
import HeaderContent from "./HeaderContent";
import ListContent from "./ListContent";
import CryptoTable from "./CryptoTable";
import Detail from "./Detail";
import Join from "./Join";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navs />
      <HeaderContent />
      <ListContent />
      <CryptoTable />
      <Detail />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
