import { Grid, Paper } from "@mui/material";

const Section = ({ children }) => {
  return (
    <Paper sx={{ padding: (theme) => theme.spacing(3) }}>
      <Grid container spacing={1}>
        {children}
      </Grid>
    </Paper>
  );
};

export default Section;
