import LinearProgress from "@mui/material/LinearProgress";
import { Box, styled } from "@mui/material";

const LoaderWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: theme.zIndex.modal + 1,
  width: "100%",
  padding: 0,
  margin: 0,
}));

const ViewLoader = () => {
  return (
    <LoaderWrapper>
      <LinearProgress color="primary" />
    </LoaderWrapper>
  );
};

export default ViewLoader;
