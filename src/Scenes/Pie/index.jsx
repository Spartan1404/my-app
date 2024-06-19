import { Box } from "@mui/material";
import Header from "../../Components/Header";
import PieChart from "../../Components/PieChart";
import { useTranslation } from "react-i18next";

const Pie = () => {
  const [t, i18n] = useTranslation()
  return (
    <Box m={"0 1.5rem"}>
      <Header title={t("Pie Chart")} subtitle={t("Simple Pie Chart")} />
      <Box height={"75vh"}>
        <PieChart/>
      </Box>
    </Box>
  );
};

export default Pie