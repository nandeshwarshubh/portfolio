import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

const pages = ["Home", "MySkills", "Blog", "Contact"];

const RootAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}></Box>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => {
                console.log(page);
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default RootAppBar;
