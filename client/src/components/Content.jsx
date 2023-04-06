import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useState } from "react";



const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

function Content() {
  const [textFieldValue, setTextFieldValue] = useState("");

  const sendDataToServer = async ( inputValue) => {
    const artist = inputValue; ;
    const accessToken =
      "BQDqz3yYJYKTnXYcXcR7glGp9sglDKeKMZNy0jfq9jGTYWvd13t1wSvC0s1CSAyTmtZVvG41YLR1SjJY8Ell5zvM4vP6GhZlGBDzPo4C51zwnsRRTic5";

    fetch(`https://api.spotify.com/v1/search?q=${artist}&type=track`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Display the response data on the page
        const tracks = data.tracks.items;
        const trackList = document.createElement("ul");
        tracks.forEach((track) => {
          const trackItem = document.createElement("li");
          trackItem.innerText = track.name;
          trackList.appendChild(trackItem);
        });
        document.body.appendChild(trackList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box flex={10}>
      <Stack
        sx={{ width: "100%", height: "95%" }}
        alignItems="center"
        justifyContent="center"
      >
        {/* go to figma
      https://www.figma.com/file/ikqh8MhHvYJlxklDhMCxSI/Untitled?node-id=0-1&t=QUgc5c5xRSrmriCr-0
      input */}
        <Stack sx={{ height: "40%" }} justifyContent="space-around">
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
            onClick={() => {
              sendDataToServer().then((data) => console.log(data));
            }}
          >
            submit
          </Button>
          <Box sx={{ color: "white", textAlign: "center", fontSize: "22px" }}>
            Type A Music Type To Generate A Playlist From All Over The World
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Content;
