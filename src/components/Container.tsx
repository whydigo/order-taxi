import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./Header";
import Order from "./Order";

const SimpleContainer: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: " #ffffff", height: "100vh" }}>
          <Header />
          <Order />
        </Box>
      </Container>
    </>
  );
};

export default SimpleContainer;
