import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const getToken = () => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "client_id=04e7961d25254fc79c7c01c5e6e53fbd&client_secret=ff2df9c31bd246c2859e341b34a78027&grant_type=client_credentials",
    })
      .then((response) => response.json())
      .then((data) => console.log(data.access_token));
  };

  return (
    <>
      <Box
        sx={{
          color: "white",
          backgroundColor: "#0066cc",
          height: "45px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px",
          fontSize: "22px",
        }}
        onClick={getToken}
      >
        <Stack p={"10px"} direction="row" justifyContent={"space-between"}>
          GENERATOR
          <Box>
            <MenuIcon sx={{ cursor: "pointer" }} />
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default Header;
