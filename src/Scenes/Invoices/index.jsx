import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../Data/mockData";
import Header from "../../Components/Header";
import { useTranslation } from "react-i18next";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [t, i18n] = useTranslation()
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: t("Name"),
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: t("Email"), flex: 1 },
    {
      field: "cost",
      headerName: t("Cost"),
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    { field: "phone", headerName: t("Phone"), flex: 1 },
    { field: "date", headerName: t("Date"), flex: 1 },
  ];
  return (
    <Box m="0px 1rem">
      <Header title={t("Invoices")} subtitle={t("List of invoice balance")} />
      <Box
        m={"auto"}
        height={"75vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          //autoPageSize
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default Invoices;
