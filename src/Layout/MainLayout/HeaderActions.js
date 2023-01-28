import { DarkModeTwoTone } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { BaseThemeContext } from "Contexts/BaseThemeContext";
import { useContext } from "react";

const HeaderActions = () => {
  const { setMode } = useContext(BaseThemeContext);
  const toggleMode = () => {
    setMode(localStorage.getItem("mode") === "light" ? "dark" : "light");
  };

  return (
    <Tooltip title={"Mode"}>
      <IconButton onClick={toggleMode}>
        <DarkModeTwoTone />
      </IconButton>
    </Tooltip>
  );
};

export default HeaderActions;
