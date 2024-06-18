import { Box, colors } from "@mui/material";
import Header from "../../Components/Header";
import GeoChart from "../../Components/GeoChart";
import { useTranslation } from "react-i18next";

const Geography = () => {
  const [t, i18n] = useTranslation()
  return (
    <Box m={"0 1.5rem"}>
      <Header title={t("Choropleth Map")} subtitle={t("Simple Choropleth Map")} />
      <Box height={"75vh"} border={`1px solid ${colors.grey[100]}`}>
        <GeoChart/>
      </Box>
    </Box>
  );
};

export default Geography