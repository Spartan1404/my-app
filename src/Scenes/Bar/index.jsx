import { Box } from "@mui/material";
import Header from "../../Components/Header";
import BarChart from "../../Components/BarChart";

const Bar = () => {
  return (
    <Box m={"0 1.5rem"}>
      <Header title={"Bar Chart"} subtitle={"Simple Bar Chart"} />
      <Box height={"75vh"}>
        <BarChart/>
      </Box>
    </Box>
  );
};

export default Bar
