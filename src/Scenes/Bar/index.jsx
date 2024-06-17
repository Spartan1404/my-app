import { Box } from "@mui/material";
import Header from "../../Components/Header";
import BarChart from "../../Components/BarChart";
import { useTranslation } from "react-i18next";

const Bar = () => {
  const [t, i18n] = useTranslation()
  return (
    <Box m={"0 1.5rem"}>
      <Header title={t("Bar Chart")} subtitle={t("Simple Bar Chart")} />
      <Box height={"75vh"}>
        <BarChart/>
      </Box>
    </Box>
  );
};

export default Bar
