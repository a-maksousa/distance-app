import { ButtonBase } from "@mui/material";
import { Box } from "@mui/system";

const LogoSection = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ButtonBase onClick={() => {}}>
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
