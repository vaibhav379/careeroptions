import {
  Box,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import { setUserDetails } from "../../store/actions";
import { connect } from "react-redux";
import cities from "../../config/Misc/cities.json";
import * as yup from "yup";
import "./Home.css";
import { useFormik } from "formik";
import StyledButton from "../../util/StyledButton";


const Home = (props) => {
  const handleRegionChange = (e) => {
    formik.setFieldValue("region", e.target.value);
    formik.setFieldValue("city", "");
  };

  const handleCityChange = (e) => {
    formik.setFieldValue("city", e.target.value);
  };

  const handleRadioChange = (e) => {
    formik.setFieldValue("education", e.target.value);
  };
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: props.userDetails,
    validationSchema: yup.object({
      name: yup.string().required("Name is required"),
      email: yup.string().email().required("Email is required"),
      region: yup.string().required("State is required"),
      city: yup.string().required("City is required"),
      education: yup.string(),
      stream: yup.string(),
    }),
    onSubmit: (values) => {
      props.setUserDetails(values);
      console.log(values);
      navigate("/dashboard");
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: "url(/images/first.png)",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          padding: "20px",
          top: "10%",
        }}
      >
        <Typography variant="h2">Let's get to know you first</Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          padding: "20px",
          top: "25%",
        }}
      >
        <Card sx={{p:"30px"}}>
        <Stack sx={{ minWidth: "20em" }} direction="column" spacing={2.5}>
          <TextField
            className="FieldItem"
            label="Name"
            id="name"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            fullWidth
          />
          <TextField
            className="FieldItem"
            label="Email"
            id="email"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
          />

          <FormControl className="FieldItem" fullWidth>
            <InputLabel id="region-label">State</InputLabel>
            <Select
              fullWidth
              labelId="region-label"
              id="region"
              label="State"
              value={formik.values.region}
              error={formik.touched.region && Boolean(formik.errors.region)}
              onChange={handleRegionChange}
            >
              <MenuItem value="">Select State</MenuItem>
              {Object.keys(cities).map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl className="FieldItem" fullWidth>
            <InputLabel id="city-label">City</InputLabel>
            <Select
              fullWidth
              id="city"
              labelId="city-label"
              label="City"
              value={formik.values.city}
              error={formik.touched.city && Boolean(formik.errors.city)}
              onChange={handleCityChange}
            >
              <MenuItem value="">Select city</MenuItem>
              {cities[formik.values.region] &&
                cities[formik.values.region].map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>

          <FormControl className="FieldItem">
            <FormLabel>Education</FormLabel>
            <RadioGroup
              value={formik.education}
              onChange={handleRadioChange}
              sx={{ margin: "auto" }}
              row
            >
              <FormControlLabel
                value="10th"
                control={<Radio size="small" />}
                label="10th"
              />
              <FormControlLabel
                value="12th"
                control={<Radio size="small" />}
                label="12th"
              />
              <FormControlLabel
                value="undergrad"
                control={<Radio size="small" />}
                label="Undergrad"
              />
            </RadioGroup>
          </FormControl>

          {formik &&
            formik.values &&
            ["undergrad"].includes(formik.values.education) && (
              <TextField
                className="FieldItem"
                label="Speacialization"
                id="stream"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.stream}
                error={formik.touched.stream && Boolean(formik.errors.stream)}
                helperText={formik.touched.stream && formik.errors.stream}
                fullWidth
              />
            )}
          <Box>
            <StyledButton onClick={formik.handleSubmit}>Proceed</StyledButton>
          </Box>
        </Stack>
        </Card>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetails: state.form.userDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserDetails: (obj) => {
      dispatch(setUserDetails(obj));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
