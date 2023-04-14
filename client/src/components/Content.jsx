import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useState } from "react";
import TrackTable from "./TrackTable";
import Test from "./Test.jsx";
import MusicCard from "./MusicCard";

function Content() {
  const [textFieldValue, setTextFieldValue] = useState("");

  const sendDataToServer = async () => {
    const data = { data: textFieldValue };

    console.log(JSON.stringify(data));
    const result = await fetch("http://localhost:5000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return result.json();
  };
  const musicData = {
    tracks: [
      {
        name: "set fire",
        description:
          "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur.",
      },
      {
        name: "adele",
        description:
          "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur.",
      },
    ],
  };

  return (
    <Box
      flex={10}
      sx={{ Width: "100%", minHeight: "86vh", marginBottom: "12vh" }}
    >
      <Stack
        // sx={{ Width: "100%", height: "95%" }}
        alignItems="center"
        justifyContent="center"
      >
        {/* go to figma
      https://www.figma.com/file/ikqh8MhHvYJlxklDhMCxSI/Untitled?node-id=0-1&t=QUgc5c5xRSrmriCr-0
      input */}
        <Box
          sx={{
            maxHeight: "33vh",
            width: "50vw",
            textAlign: "center",
            color: "white",
          }}
        >
          {/* <Test /> */}
          slither
        </Box>

        <Stack
          sx={{ height: "40vh", marginTop: "120px" }}
          justifyContent="space-around"
        >
          <Box bgcolor={"#E3E2E3"} sx={{ borderRadius: "8px" }}>
            <TextField
              id="filled-search"
              label="Your Music Type"
              type="search"
              variant="filled"
              color="primary"
              sx={{ width: "700px" }}
              onChange={(e) => setTextFieldValue(e.target.value)}
            />
          </Box>
          <Button
            variant="outlined"
            sx={{
              width: "150px",
              position: "relative",
              left: "38%",
              color: "white",
            }}
            onClick={() =>
              sendDataToServer().then((res) => {
const { items } = res.tracks;
items.forEach(
  ({ artists, album: { album_type, images, name, release_date } }) => {
    artists.forEach(({ name: artistName }) => {
        console.log(artistName);
    });
    console.log(album_type);
    console.log(images[0].url);
    console.log(name);
    console.log(release_date);
    console.log("==========================================");
  }
);
              })}
          >
            submit
          </Button>
          <Box sx={{ color: "white", textAlign: "center", fontSize: "22px" }}>
            Type A Music Type To Generate A Playlist From All Over The World
          </Box>
        </Stack>

        <h1 style={{ color: "white" }}>Tracks </h1>
        {/* <TrackTable  /> */}
      </Stack>
      {/* <MusicCard items={musicData} /> */}
      <MusicCard items={musicData} />
    </Box>
  );
}

export default Content;
