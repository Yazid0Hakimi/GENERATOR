import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

function MusicCard(props) {
  return (
    <Card
      sx={{ width: 300, height: 380, background: "#0a1128", margin: "30px" }}
    >
      <CardMedia
        sx={{ height: 240 }}
        image="https://i.scdn.co/image/ab67616d0000b2732118bf9b198b05a95ded6300"
        title="green iguana"
      />
      <CardContent sx= {{ paddingBottom : "0" }}>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ color: "white" }}
          component="div"
        >
          Lizard
        </Typography>
        <Typography variant="h6" sx={{ paddingLeft:"20px" }} color="white">
          desc
        </Typography>
      </CardContent>
      {/* no need for actions one button to play  */}
      <CardActions>
        <Button size="small">play </Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

export default MusicCard;
