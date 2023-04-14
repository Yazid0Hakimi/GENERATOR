import React from "react";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <Box
      bgcolor={"#0066cc"}
      sx={{
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "20px",

      
        width: "100%",
        height: "6vh",
        // marginBottom: "50px",
      }}
    >
      MADE BY EL YAZID HAKIMI <br />
      linkedin
    </Box>
  );
}

export default Footer;
