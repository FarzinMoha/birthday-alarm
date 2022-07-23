import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";


import "./App.css";
import Header from "./component/Header/Header";
import Input from "./component/Input";
import ListOfFreinds from "./component/ListOfFreinds";
import Today from "./component/Today";

const App = () => {
  let arr = [];
  const printHandler = (info) => {
    if (info.name != "") {
      arr.push(info);
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Input print={printHandler} />} />
        <Route path="/list" element={<ListOfFreinds new={arr} />} />
        <Route path="/today" element={<Today new={arr} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

{
  /* <Routes>
<Route path='/enter-data' element={<Input  print={printHandler} />} />
<Route path='/list' element={<ListOfFreinds new={arr} />} />
</Routes> */
}
