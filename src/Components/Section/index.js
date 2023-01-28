import { Grid, Paper } from "@mui/material";

const Section = ({ children, sx }) => {
  return (
    <Paper sx={{ padding: (theme) => theme.spacing(3), ...sx }}>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Paper>
  );
};

export default Section;
