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

      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
      >
        {items.map((item) => (
          <Grid item xs={3}>
            <MusicCard item={item} key={item.id} />
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
    album: { album_type, images, name, release_date },
  } = item;
  const artistName = artists[0].name;

  return (
    <Card
      sx={{
        maxWidth: "300px",
        width: "100%",
        maxHeight: "380px",
        height: "100%",
        background: "#0a1128",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia sx={{ height: 240 }} image={images[0].url} title={name} />
      <CardContent sx={{ paddingBottom: "0" }}>
        <Typography gutterBottom variant="h4" sx={{ color: "white" }}>
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
