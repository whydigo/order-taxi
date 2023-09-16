import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./Header";
import Startpoint from "./Startpoint";
import Closer from "./Closer";
import Order from "./Order";

export default function SimpleContainer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: " #ffffff", height: "100vh" }}>
          <Header />
          <Startpoint />
          <Closer />
          <Order />
        </Box>
      </Container>
    </>
  );
}
