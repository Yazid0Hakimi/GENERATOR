import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useState } from "react";
import Test from "./Test.jsx";
import { useEffect } from "react";
import CardHolder from "./CardHolder";

function Content() {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [Items, setItems] = useState([]);

  const GetApiResult = () => {
    const data = { data: textFieldValue };
    if (textFieldValue)
      fetch("http://localhost:5000/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((data) => data.json())
        .then((compData) => {
          console.log(compData);
          setItems(compData);
        })
        .catch((err) => {
          console.log(err);
        });
    else console.log("fill the input");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      GetApiResult();
    }
  };
  return (
    <>
      <Box
        flex={10}
        sx={{ Width: "100%", minHeight: "86vh", marginBottom: "12vh" }}
      >
        <Stack alignItems="center" justifyContent="center">
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
                onKeyPress={(e) => handleKeyPress(e)}
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
              onClick={GetApiResult}
            >
              submit
            </Button>
            <Box sx={{ color: "white", textAlign: "center", fontSize: "22px" }}>
              Type A Music Type To Generate A Playlist From All Over The World
            </Box>
          </Stack>
        </Stack>
        <CardHolder items={Items} />
      </Box>
    </>
  );
}
export default Content;
