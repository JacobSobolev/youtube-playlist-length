import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";
import ErrorDisplay from "./components/ErrorDisplay";
import AppHelper from "./components/AppHelper";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

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

  function getPlaylistId(strUrl) {
    const urlObj = new URL(strUrl);
    const listId = urlObj.searchParams.get("list");

    return listId;
  }

  async function calcList(strUrl) {
    try {
      const listId = getPlaylistId(strUrl);

      const listData = await getYoutubeListData(listId);
      const videoListDuration = await getYoutubeListItemsData(listId);

      const thumbnailsArr = Object.keys(listData.thumbnails).map(
        (key) => listData.thumbnails[key]
      );
      thumbnailsArr.sort((a, b) => {
        return b.height - a.height;
      });

      setPlaylistData({
        title: listData?.title,
        description: `${listData.description.substring(0, 100)}...`,
        img: thumbnailsArr[0]?.url,
        numOfVids: videoListDuration.length,
        totalLength: videoListDuration.reduce((a, b) => a + b),
      });
      setError({});
    } catch (err) {
      setError(err);
      setPlaylistData({});
    }
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <InputArea calcList={calcList} />
        <AppHelper show={!playListData?.title} />
        <OutputArea playlistData={playListData} />
        <ErrorDisplay msg={error?.message} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
