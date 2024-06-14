import { Box } from "@mui/material";
import Header from "../../Components/Header";
import PieChart from "../../Components/PieChart";

const Pie = () => {
  return (
    <Box m={"0 1.5rem"}>
      <Header title={"Pie Chart"} subtitle={"Simple Pie Chart"} />
      <Box height={"75vh"}>
        <PieChart/>
      </Box>
    </Box>
  );
};

export default Pie