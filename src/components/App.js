import React, { useState } from "react";
import Moment from "moment";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import InputArea from "./InputArea/InputArea";

import "./App.css";

function App() {
  const YoutubeListApi =
    "https://www.googleapis.com/youtube/v3/playlists?part=snippet" +
    "&key=" +
    process.env.REACT_APP_API_KEY;

  async function getYoutubeListData(listId) {
    const res = await fetch(YoutubeListApi + "&id=" + listId);
    const {
      items: [{ snippet }],
    } = await res.json();
    return snippet;
  }

  const YoutubeListItemsApi =
    "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50" +
    "&key=" +
    process.env.REACT_APP_API_KEY;

  async function getYoutubeListItemsData(listId) {
    const videoListTime = [];
    const videoListIds = [];
    let pageToken = "";

    do {
      const res = await fetch(
        YoutubeListItemsApi +
          "&playlistId=" +
          listId +
          "&pageToken=" +
          pageToken
      );
      const { items, nextPageToken } = await res.json();
      pageToken = nextPageToken;

      for (const item of items) {
        const {
          contentDetails: { videoId },
        } = item;

        const videoDuration = await getVideoDuration(videoId);
        const itemtopush = Moment.duration(videoDuration).asMinutes();
        videoListTime.push(itemtopush);
      }
    } while (pageToken);

    console.log(videoListTime);
    return videoListTime;
  }

  const YoutubeVideoApi =
  "https://www.googleapis.com/youtube/v3/videos?part=contentDetails" +
  "&key=" +
  process.env.REACT_APP_API_KEY;

  async function getVideoDuration(videoId){
    const res = await fetch(YoutubeVideoApi + "&id=" + videoId);
    const resJson = await res.json();
    const {items: [{contentDetails: {duration}}]} = resJson;
    return duration;
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
