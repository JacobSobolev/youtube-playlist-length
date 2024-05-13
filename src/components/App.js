import React, { useState } from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import InputArea from "./InputArea/InputArea";

import "./App.css";

function App() {
  const YoutubeListApi =
    "https://www.googleapis.com/youtube/v3/playlists?part=snippet" +
    "&id=PL59FEE129ADFF2B12&key=" +
    process.env.REACT_APP_API_KEY;

  const YoutubeListItemsApi =
    "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50" +
    "&playlistId=PL59FEE129ADFF2B12&key=" +
    process.env.REACT_APP_API_KEY;

  async function getYoutubeListItemsData(url) {
    const res = await fetch(YoutubeListItemsApi);
    const data = await res.json();
    return data;
  }

  async function getYoutubeListData(url) {
    const res = await fetch(YoutubeListApi);
    const data = await res.json();
    return data;
  }

  function getPlaylistId(url) {
    const urlObj = new URL(url);
    const listId = urlObj.searchParams.get("list");
    return listId;
  }

  async function calcList(url) {
    const listId = getPlaylistId(url);
    // try {
    //   const data = await getYoutubeListItemsData(url);
    //   console.log(data);
    //   const data2 = await getYoutubeListData(url);
    //   console.log(data2);
    // } catch (error) {
    //   console.log(error);
    // }
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
