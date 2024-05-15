import React, { useState } from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import InputArea from "./InputArea/InputArea";

import "./App.css";

function App() {
  const YoutubeListApi =
    "https://www.googleapis.com/youtube/v3/playlists?part=snippet" +
    "&key=" +
    process.env.REACT_APP_API_KEY;

  const YoutubeListItemsApi =
    "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50" +
    "&key=" +
    process.env.REACT_APP_API_KEY;

  async function getYoutubeListItemsData(listId) {

    const videoListId = [];
    let pageToken = "";

    do{
      const res = await fetch(YoutubeListItemsApi + "&playlistId=" + listId + "&pageToken=" + pageToken);
      const { items, nextPageToken } = await res.json();
      pageToken = nextPageToken;

      for(const item of items){
        const {contentDetails: {videoId}} = item;
        videoListId.push(videoId);
      }
    } while(pageToken);
    
    console.log(videoListId);
    return videoListId;
  }

  async function getYoutubeListData(listId) {
    const res = await fetch(YoutubeListApi + "&id=" + listId);
    const { items: [{ snippet }] } = await res.json();
    return snippet;
  }

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
