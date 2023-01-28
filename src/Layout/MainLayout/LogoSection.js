import { ButtonBase } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const LogoSection = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ButtonBase onClick={handleNavigate}>
        <Box
          sx={{
            height: "50px",
          }}
          component="img"
          src="/img/micon.svg"
        />
      </ButtonBase>
    </Box>
  );
};

export default LogoSection;
