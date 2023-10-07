import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
// import NASA1 from "../../assets/images/jpg/nasa1.jpg";
import EarthBg from "../../assets/EarthBg.mp4";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SecondSection() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid xs={8}>
          <Item>Lorem Lipsum</Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <video src={EarthBg} alt="EarthBg" autoPlay loop />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}