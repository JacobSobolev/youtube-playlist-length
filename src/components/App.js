import React, { useState } from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import InputArea from "./InputArea/InputArea";

import "./App.css";

import {getYoutubeListItemsData, getYoutubeListData} from "../utils/youtubeUtil";

function App() {
  

  function getPlaylistId(url) {
    const urlObj = new URL(url);
    const listId = urlObj.searchParams.get("list");
    return listId;
  }

  async function calcList(url) {
    const listId = getPlaylistId(url);

    try {
      // const listData = await getYoutubeListData(listId);
      // console.log(listData);

      const videoList = await getYoutubeListItemsData(listId);
      console.log(videoList);
    } catch (error) {
      console.log(error);
    }
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
