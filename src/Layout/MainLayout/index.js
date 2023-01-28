import { AppBar, Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import LogoSection from "./LogoSection";
import HeaderActions from "./HeaderActions";
import { Box } from "@mui/system";
const MainLayout = (props) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <LogoSection />
          <HeaderActions />
        </Toolbar>
      </AppBar>
      <Box component="main">
        <Toolbar />
        <Container>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default MainLayout;
