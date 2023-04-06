import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div >
      <Stack
        sx={{ height: "100vh" }}
        direction="column"
        justifyContent="space-beween"
      >
        <Header />
        <Content />
        <Footer />
      </Stack>
    </div>
  );
}

export default App;
