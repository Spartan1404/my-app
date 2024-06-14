import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../Components/Header";
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"0 1.5rem"}>

      <Header title={"FAQ"} subtitle={"Frequently Asked Questions Page"} />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Important question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam asperiores sed labore. Eum repellendus facilis ducimus ipsam quisquam quaerat culpa?
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Important question 2
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam asperiores sed labore. Eum repellendus facilis ducimus ipsam quisquam quaerat culpa?
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Important question 3
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam asperiores sed labore. Eum repellendus facilis ducimus ipsam quisquam quaerat culpa?
            </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  );
};

export default FAQ;
