import React, { useState } from "react";
import moment from "moment";

import Header from "./components/Header";
import Footer from "./components/Footer";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";
import ErrorDisplay from "./components/ErrorDisplay";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import "./App.css";

import {
  getYoutubeListItemsData,
  getYoutubeListData,
} from "./utils/youtubeUtil";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#008a86",
      },
      secondary: {
        main: red[500],
      },
    },
  });

  const [playListData, setPlaylistData] = useState({});
  const [error, setError] = useState();

  function getPlaylistId(url) {
    if (url.length === 0)
      throw new Error("URL Empty");
    if (!url.includes("youtube.com"))
      throw new Error("URL needs to be from youtube.com");

    const urlObj = new URL(url);
    const listId = urlObj.searchParams.get("list");

    if (!url.listId)
      throw new Error("URL isn't a playlist from youtube");
    return listId;
  }

  async function calcList(url) {
    

    try {
      const listId = getPlaylistId(url);

      const listData = await getYoutubeListData(listId);
      const videoListDuration = await getYoutubeListItemsData(listId);

      setPlaylistData({
        title: listData.title,
        description: listData.description,
        img: listData.thumbnails.standard.url,
        numOfVids: videoListDuration.length,
        totalLength: videoListDuration.reduce((a, b) => a + b),
      });
    } catch (err) {
      setError(err);
    }
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <InputArea calcList={calcList} />
        <OutputArea playlistData={playListData} />
        <ErrorDisplay msg={error?.message}/>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
