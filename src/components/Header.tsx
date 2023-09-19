import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header: React.FC = () => {
  return (
    <Box marginBottom={4} sx={{ flexGrow: 1 }}>
      <AppBar color="primary" position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Детали заказа
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
