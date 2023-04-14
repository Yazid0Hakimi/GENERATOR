import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function Test(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image:
        "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: "https://i.scdn.co/image/ab67616d0000b2732118bf9b198b05a95ded6300",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper sx={{ background: "blue" }}>
      <img
        src={props.item.image}
        style={{ maxWidth: "68%", maxHeight: "68%" }}
      ></img>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Test;
