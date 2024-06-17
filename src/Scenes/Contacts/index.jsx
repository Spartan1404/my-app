import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../Data/mockData";
import Header from "../../Components/Header";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [t, i18n] = useTranslation()
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: t("Register ID") },
    {
      field: "name",
      headerName: t("Name"),
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: t("Age"),
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: t("Phone"), flex: 1 },
    { field: "email", headerName: t("Email"), flex: 1 },
    { field: "address", headerName: t("Address"), flex: 1 },
    { field: "city", headerName: t("City"), flex: 1 },
    { field: "zipCode", headerName: t("ZipCode"), flex: 1 },
  ];
  return (
    <Box m="0px 1rem">
      <Header title={t("Contacts")} subtitle={t("List of contacts")} />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          //autoPageSize
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default Contacts;
