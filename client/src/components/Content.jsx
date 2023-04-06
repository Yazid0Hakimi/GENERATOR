import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import {Button} from "@mui/material";
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

const sendDataToServer = async () => {
  const data = {data : textFieldValue};

  // console.log(JSON.stringify(data));
 const gg = await fetch("http://localhost:5000/post", {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
   },
   body: JSON.stringify(data) ,
 });
return gg.json();
}

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
            onClick={ ()=>{sendDataToServer().then((data) => console.log(data))}}
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
