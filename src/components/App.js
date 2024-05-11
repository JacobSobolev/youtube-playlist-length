import React, { useState } from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import InputArea from "./InputArea/InputArea";

import "./App.css";

function App() {
  function calcList(url) {
    console.log(url);
  }

  return (
    <div>
      <Header />
      <InputArea calcList={calcList} />
      <Footer />
    </div>
  );
}

export default App;
