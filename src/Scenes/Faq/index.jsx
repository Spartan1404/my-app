import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../Components/Header";
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [t, i18n] = useTranslation()

  return (
    <Box m={"0 1.5rem"}>

      <Header title={t("FAQ")} subtitle={t("Frequently Asked Questions Page")} />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                {t('Important question')}
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
            {t('Important question 2')}
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
            {t('Important question 3')}
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
