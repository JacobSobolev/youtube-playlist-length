import React, { useState } from "react";
import moment from "moment";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import InputArea from "./InputArea/InputArea";
import OutputArea from "./OutputArea/OutputArea";

import "./App.css";

import {
  getYoutubeListItemsData,
  getYoutubeListData,
} from "../utils/youtubeUtil";

function App() {
  const [playListData, setPlaylistData] = useState({});

  function getPlaylistId(url) {
    const urlObj = new URL(url);
    const listId = urlObj.searchParams.get("list");
    return listId;
  }

  async function calcList(url) {
    const listId = getPlaylistId(url);

    try {
      const listData = await getYoutubeListData(listId);
      // console.log(listData);

      const videoListDuration = await getYoutubeListItemsData(listId);
      // console.log(videoListDuration);

      setPlaylistData({
        title: listData.title,
        description: listData.description,
        img: listData.thumbnails.standard.url,
        numOfVids: videoListDuration.length,
        totalLength: videoListDuration.reduce((a, b) => a + b),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header />
      <InputArea calcList={calcList} />
      <OutputArea playlistData={playListData} />
      <Footer />
    </div>
  );
}

export default App;
