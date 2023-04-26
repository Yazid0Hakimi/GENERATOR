import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { Stack } from "@mui/system";

function CardHolder(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (props.items?.tracks?.items) {
      setItems(props.items.tracks.items);
    } else {
      console.log("empty");
    }
  }, [props]);
  return (
    <>
      <h1 style={{ color: "white", width: "100%", textAlign: "center" }}>
        Infographie
      </h1>

      <Grid container rowSpacing={1} columnSpacing={1}>
        {items.map((item) => (
          <Grid item xs={3}>
            <MusicCard item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

function MusicCard(props) {
  const { item } = props;
  const {
    artists,
    album: { album_type, images,  release_date },
} = item;
  let {name} = item;


  let artistName = artists[0].name;

  if (name.length > 20) {
    name = name.slice(0, 20) + "...";
  }
  if (artistName.length > 20) {
    artistName = artistName.slice(0, 14) + "...";
  }
  return (
    <Card
      sx={{
        maxWidth: "300px",
        width: "100%",
        maxHeight: "387px",
        height: "100%",
        background: "#0a1128",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia sx={{ minHeight: 240 }} image={images[0].url} title={name} />
      <CardContent sx={{ paddingBottom: "0", padding: "5px 10px 0 15px" }}>
        <Typography
          gutterBottom
          variant="p"
          sx={{ fontSize: "22px", color: "white" }}
        >
         {name}
        </Typography>
        <Typography
          variant="p"
          sx={{ fontSize: "20px", display: "block", margin: "13px 0 0 0" }}
          color="white"
        >
          <Stack
            alignItems="center"
            direction={"row"}
            justifyContent="space-Between"
          >
            <p>{artistName}</p>
            <p> {album_type.slice(0, 1).toUpperCase() + album_type.slice(1)}</p>
          </Stack>
        </Typography>
        <Typography
          variant="p"
          sx={{
            textAlign: "end",
            fontSize: "20px",
            display: "block",
            margin: "13px 0 0 0",
            color: "#0055ef",
          }}
        >
          {release_date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ padding: "0px 8px 8px" }} size="small">
          Show{" "}
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardHolder;
