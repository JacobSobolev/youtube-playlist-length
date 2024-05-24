import React, { useState } from "react";
import moment from "moment";

import Header from "./components/Header";
import Footer from "./components/Footer";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";

import { createTheme, ThemeProvider } from '@mui/material/styles';
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
        main: '#008a86',
      },
      secondary: {
        main: red[500],
      },
    },
  });

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
      <ThemeProvider theme={theme}>
        <Header />
        <InputArea calcList={calcList} />
        <OutputArea playlistData={playListData} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
