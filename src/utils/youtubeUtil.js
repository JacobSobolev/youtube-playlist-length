import Moment from "moment";

const YoutubeListApi = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&key=${process.env.REACT_APP_API_KEY}`;

async function getYoutubeListData(listId) {
  const res = await fetch(`${YoutubeListApi}&id=${listId}`);

  const {
    items: [{ snippet }],
  } = await res.json();
  return snippet;
}

const YoutubeListItemsApi = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&key=${process.env.REACT_APP_API_KEY}`;

async function getYoutubeListItemsData(listId) {
  let videoListTime = [];
  let videoIds = [];
  let pageToken = "";

  do {
    const res = await fetch(
      `${YoutubeListItemsApi}&playlistId=${listId}&pageToken=${pageToken}`
    );
    const { items, nextPageToken } = await res.json();
    pageToken = nextPageToken;

    videoIds = [...items.map((item) => item.contentDetails.videoId)];

    let videosDuration = await getVideosDuration(videoIds.join(","));
    videoListTime = videoListTime.concat(videosDuration);
    videoIds = [];
  } while (pageToken);

  return videoListTime;
}

const YoutubeVideoApi = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&key=${process.env.REACT_APP_API_KEY}`;

async function getVideosDuration(videoIds) {
  let videosDuration = [];
  const res = await fetch(`${YoutubeVideoApi}&id=${videoIds}`);
  const { items } = await res.json();

  videosDuration = [
    ...items.map((item) => {
      return Moment.duration(item.contentDetails.duration).asSeconds();
    }),
  ];

  return videosDuration;
}

export { getYoutubeListData, getYoutubeListItemsData };
