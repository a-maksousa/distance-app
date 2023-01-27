import { DarkModeTwoTone } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { BaseThemeContext } from "Contexts/BaseThemeContext";
import { useContext } from "react";

const HeaderActions = () => {
  const { setMode } = useContext(BaseThemeContext);
  const toggleMode = () => {
    setMode(localStorage.getItem("mode") === "light" ? "dark" : "light");
  };

  return (
    <Box sx={{ flexGrow: 0.05, justifyContent: "space-around", display: "flex", alignItems: "center" }}>
      <Tooltip title={"Mode"}>
        <IconButton onClick={toggleMode}>
          <DarkModeTwoTone />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default HeaderActions;
