import { Box } from "@mui/material";
import Header from "../../Components/Header";
import LineChart from "../../Components/LineChart";
import { useTranslation } from "react-i18next";

const Line = () => {
  const [t, i18n] = useTranslation()
  return (
    <Box m={"0 1.5rem"}>
      <Header title={t("Line Chart")} subtitle={t("Simple Line Chart")} />
      <Box height={"75vh"}>
        <LineChart/>
      </Box>
    </Box>
  );
};

export default Line