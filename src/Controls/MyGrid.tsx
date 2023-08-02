import Grid from "@mui/material/Grid";
export default function MyGrid({
  vp = 6,
  alignItems = "center",
  textAlign = "center",
  children,
}: {
  vp?: number;
  alignItems?: string;
  textAlign?: any;
  children: any;
}) {
  return (
    <Grid md={vp} xs={vp} sm={vp}>
      {children}
    </Grid>
  );
}
