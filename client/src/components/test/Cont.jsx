import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import MusicCard from "../../components/MusicCard"

function Content() {
  const [textFieldValue, setTextFieldValue] = useState("");

  const sendDataToServer = async () => {
  };

  return (
    <Box flex={10} sx={{ minHeight: "88vh" }}>
      <Stack sx={{ Width: "100%" }} alignItems="center" justifyContent="center">
        {/* go to figma
      https://www.figma.com/file/ikqh8MhHvYJlxklDhMCxSI/Untitled?node-id=0-1&t=QUgc5c5xRSrmriCr-0
      input */}
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
                console.log(res);
              })
            }
          >
            submit
          </Button>
          <Box sx={{ color: "white", textAlign: "center", fontSize: "22px" }}>
            Type A Music Type To Generate A Playlist From All Over The World
          </Box>
        </Stack>

        {/* <h1>Tracks </h1> */}
        {/* <TrackTable  /> */}
      </Stack>
      {/* <MusicCard /> */}
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ratione
      adipisci quam facere inventore velit, dicta repellendus autem
      reprehenderit voluptatibus obcaecati aut, laudantium distinctio at dolorum
      voluptate corrupti! Aspernatur mollitia corporis eligendi consequatur
      reprehenderit molestias eum rerum nostrum voluptas aut ut cum accusamus
      facere tempore quidem cupiditate, harum atque consequuntur, nobis quia
      iure officia! Ab ducimus eligendi quam illum debitis, quidem, unde qui
      tempora natus omnis vel officia consequuntur quibusdam odit! A animi,
      fugiat nesciunt itaque, corrupti aut similique vero aperiam rem, unde
      quasi. Vero adipisci unde ullam fugit animi, veniam perspiciatis quo,
      expedita, commodi amet explicabo maxime corrupti quisquam.
    </Box>
  );
}

export default Content;
