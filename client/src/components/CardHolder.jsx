import React, { useState, useEffect } from "react";

import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

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
      {items.map((item) => (
        <MusicCard item={item} key={item.id} />
      ))}
    </>
  );
}

function MusicCard(props) {
  const { item } = props;
  const {
    artists,
    album: { album_type, images, name, release_date },
  } = item;
  const artistName = artists[0].name;

  return (
    <Card
      sx={{
        width: 300,
        height: 380,
        background: "#0a1128",
        margin: "30px",
      }}
    >
      <CardMedia sx={{ height: 240 }} image={images[0].url} title={name} />
      <CardContent sx={{ paddingBottom: "0" }}>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ color: "white" }}
          component="div"
        >
          {name}
        </Typography>
        <Typography variant="h6" sx={{ paddingLeft: "20px" }} color="white">
          {artistName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">play </Button>
      </CardActions>
    </Card>
  );
}

export default CardHolder;
