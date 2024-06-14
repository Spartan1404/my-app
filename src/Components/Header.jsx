import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="1.5rem">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight={"bold"}
        sx={{ mb: "0.5rem" }}
      >
        {title}
      </Typography>
      <Typography>{subtitle}</Typography>
    </Box>
  );
};

export default Header;
