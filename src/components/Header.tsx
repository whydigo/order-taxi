import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box marginBottom={4} sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          bgcolor: "#e7e7e7",
          color: "black",
        }}
        position="static"
      >
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Детали заказа
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
