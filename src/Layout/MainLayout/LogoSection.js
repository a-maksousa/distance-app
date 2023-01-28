import { ModeOfTravelTwoTone } from "@mui/icons-material";
import { Avatar, ButtonBase, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const LogoText = styled(Typography)(({ theme, color }) => ({
  color: color === "primary" ? theme.palette.primary.main : theme.palette.primary.secondary,
  fontWeight: "bold",
}));

const LogoSection = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ButtonBase onClick={handleNavigate}>
        <Avatar variant="rounded" sx={{ bgcolor: (theme) => theme.palette.secondary.main, marginInlineEnd: 1 }}>
          <ModeOfTravelTwoTone />
        </Avatar>
        <LogoText variant="h5" color="primary">Travel</LogoText>
        <LogoText variant="h5" color="secondary">Planner</LogoText>
      </ButtonBase>
    </Box>
  );
};

export default LogoSection;
