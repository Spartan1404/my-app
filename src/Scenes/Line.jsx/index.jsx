import { Box } from "@mui/material";
import Header from "../../Components/Header";
import LineChart from "../../Components/LineChart";

const Line = () => {
  return (
    <Box m={"0 1.5rem"}>
      <Header title={"Line Chart"} subtitle={"Simple Line Chart"} />
      <Box height={"75vh"}>
        <LineChart/>
      </Box>
    </Box>
  );
};

export default Line