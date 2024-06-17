import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import { mockTransactions } from "../../Data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../Components/LineChart";
import BarChart from "../../Components/BarChart";
import PieChart from "../../Components/PieChart";
import StatBox from "../../Components/StatBox";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [t, i18n] = useTranslation()
  const buttonGroupSX = { color: colors.greenAccent[500], fontWeight: "400" };
  const [selectedButton, setSelectedButton] = useState("left");

  return (
    <Box m="0.5rem">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title={t("Dashboard")} subtitle={t("Welcome")} />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "1rem",
              fontWeight: "bold",
              padding: "0.6rem 1.2rem",
              "&:hover": { border: `1px solid ${colors.blueAccent[700]}` },
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "0.6rem" }} />
            {t('Download All Reports')}
          </Button>
        </Box>
      </Box>
      {/* grid and charts */}
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        gridAutoRows={"8rem"}
        gap={"1rem"}
      >
        {/* Row 1 */}
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title={"12,345"}
            subtitle={t('Emails Sent')}
            progress={"0.75"}
            increase={"+14%"}
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "1.6rem" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title={"435,345"}
            subtitle={t("Sales Obtained")}
            progress={"0.5"}
            increase={"+23%"}
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "1.6rem" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title={"132,335"}
            subtitle={t("New Clients")}
            progress={"0.3"}
            increase={"+5%"}
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "1.6rem" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title={"8,612,345"}
            subtitle={t("Traffic Inbound")}
            progress={"0.80"}
            increase={"+44%"}
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "1.6rem" }}
              />
            }
          />
        </Box>
        {/* Row 2 */}
        <Box
          gridColumn={"span 8"}
          gridRow={"span 3"}
          backgroundColor={colors.primary[400]}
          height={"100%"}
        >
          <Box
            mt={"1.5rem"}
            p={"0 2.5rem"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight={"600"}
                color={colors.grey[100]}
              >
                {t('Revenue Generated')}
              </Typography>
              <Typography
                variant="h3"
                fontWeight={"500"}
                color={colors.greenAccent[500]}
              >
                $59,340.20
              </Typography>
            </Box>
            <Box ml="-2.5rem">
              <ToggleButtonGroup
                value={selectedButton}
                exclusive
                onChange={(event, newAlignment) => {
                  setSelectedButton(newAlignment);
                }}
                variant="text"
              >
                <ToggleButton value={"left"} sx={buttonGroupSX}>
                  {t('Line Chart')}
                </ToggleButton>
                <ToggleButton value={"center"} sx={buttonGroupSX}>
                  {t('Bar Chart')}
                </ToggleButton>
                <ToggleButton value={"right"} sx={buttonGroupSX}>
                  {t('Pie Chart')}
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "1.5rem", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height={"80%"} ml={"-1.2rem"}>
            {selectedButton === "left" && <LineChart small={true} />}
            {selectedButton === "center" && <BarChart small={true} />}
            {selectedButton === "right" && <PieChart small={true} />}
          </Box>
        </Box>
        {/* transactions */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 3"}
          backgroundColor={colors.primary[400]}
          overflow={"auto"}
          
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
          >
            <Typography
              color={colors.grey[100]}
              variant="h5"
              fontWeight={"600"}
              p={'1rem'}
            >
              {t('Recent Transactions')}
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="1rem"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight={"600"}
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p={"0.5rem 0.8rem"}
                borderRadius={"4px"}
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
