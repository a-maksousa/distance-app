import { Grid, Paper } from "@mui/material";

const Section = ({ children }) => {
  return (
    <Grid container>
      <Paper sx={{ padding: (theme) => theme.spacing(3), width: "100%", height:"100%" }}>{children}</Paper>
    </Grid>
  );
};

export default Section;
