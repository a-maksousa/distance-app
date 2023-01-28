import { Divider, Grid, Paper, Typography } from "@mui/material";

const Section = ({ children, sx, title }) => {
  return (
    <Paper sx={{ padding: (theme) => theme.spacing(3), ...sx }}>
      {title && (
        <>
          <Typography variant="h6">{title}</Typography>
          <Divider sx={{ marginBlock: 1 }} />
        </>
      )}
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Paper>
  );
};

export default Section;
