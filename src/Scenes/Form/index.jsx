import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../Components/Header";
import { useTranslation } from "react-i18next";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address: "",
  address2: "",
};
const phoneRegex = /^7|5 ?[0-9]{7}$/gm;

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [t, i18n] = useTranslation()

  const userSchema = yup.object().shape({
    firstName: yup.string().required(t('Required field')),
    lastName: yup.string().required(t('Required field')),
    email: yup.string().email("Invalid email").required(t('Required field')),
    contact: yup.string().matches(phoneRegex, "Phone number is not valid").required(t('Required field')),
    address: yup.string().required(t('Required field')),
    address2: yup.string().required(t('Required field')),
  });

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m={"1.5rem"}>
      <Header title={t("Form")} subtitle={t("Simple form")} />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display={"grid"}
              gap={"1.5rem"}
              gridTemplateColumns={"repeat(4, minmax(0, 1fr)"}
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("First Name")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firtsName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{gridColumn: "span 2"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("Last Name")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{gridColumn: "span 2"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{gridColumn: "span 4"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("Contact Number")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{gridColumn: "span 4"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("Address 1")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{gridColumn: "span 4"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("Address 2")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{gridColumn: "span 4"}}
              />
            </Box>
            <Box display={"flex"} justifyContent={"end"} mt={"1rem"}>
              <Button type="submit" color="secondary" variant="contained">
                {t('Create New User')}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
