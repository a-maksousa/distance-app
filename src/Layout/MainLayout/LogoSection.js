import { ModeOfTravelTwoTone } from "@mui/icons-material";
import { Avatar, ButtonBase, Typography } from "@mui/material";
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
        <Avatar variant="rounded" sx={{ bgcolor: (theme) => theme.palette.secondary.main, marginInlineEnd: 1 }}>
          <ModeOfTravelTwoTone  />
        </Avatar>
        <Typography variant="h5" sx={{ color: (theme) => theme.palette.primary.main, fontWeight: "bold" }}>
          Travel
        </Typography>
        <Typography variant="h5" sx={{ color: (theme) => theme.palette.secondary.main }}>
          Planner
        </Typography>
      </ButtonBase>
    </Box>
  );
};

export default LogoSection;
