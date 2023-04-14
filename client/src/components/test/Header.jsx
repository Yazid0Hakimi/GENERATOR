import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <>
      <Box
        sx={{
          color: "white",
          backgroundColor: "#0066cc",
          height: "45px",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px",
          fontSize: "22px",
        }}
      >
        <Stack p={"10px"} direction="row" justifyContent={"space-between"}>
          PLAYL!ST
          <Box>
            <MenuIcon />
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default Header;
