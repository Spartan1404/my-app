import { Box, colors } from "@mui/material";
import Header from "../../Components/Header";
import GeoChart from "../../Components/GeoChart";

const Geography = () => {
  return (
    <Box m={"0 1.5rem"}>
      <Header title={"Geography Chart"} subtitle={"Simple Geography Chart"} />
      <Box height={"75vh"} border={`1px solid ${colors.grey[100]}`}>
        <GeoChart/>
      </Box>
    </Box>
  );
};

export default Geography