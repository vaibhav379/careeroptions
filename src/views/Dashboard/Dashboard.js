import {
  Box,
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Toolbar,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import Interests from "./Forms/Interests";
import * as Yup from 'yup';
import Skills from "./Forms/Skills";


const Dashboard = () => {
  const steps = ["Interests", "Skills", "Purpose", "Socio-Economic"];
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    if (activeStep === steps.length - 1) {
      alert("completed all");
    }
  };

  const formContent = (step)=>{
    switch(step) {
      case 0:
        return <Interests formik = {InterestsFormik}/>;
      case 1:
        return <Skills formik = {InterestsFormik}/>;
      default:
        return <div>404: Not Found</div>
    }
  }

  const InterestsFormik = useFormik({
    initialValues : {
      name:'',
      skill : ''
    },
    validationSchema : Yup.object().shape({
      name : Yup.string()
      .required("Name is required"),
      skill : Yup.string()
    }),
    onSubmit : ()=>{
      if (activeStep === steps.length - 1) {
        console.log('last step');
      } else {
        handleNext();
      }
    }
  });


  return (
    <Box>
      <Toolbar />
      {/* <Typography variant="h5">Please let us know more about you</Typography> */}
      <Box sx={{ p: "10px", mt: "20px" }}>
        <Paper sx={{ p: "10px" }} elevation={3}>
          <Stepper activeStep={activeStep}>
            {steps.map((step, index) => {
              const stepProps = {};

              return (
                <Step label={step} key={index} {...stepProps}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Paper>
        <Paper elevation={3} sx={{ p: "10px", mt: "10px" }}>
          {formContent(activeStep)}
        </Paper>
        <Paper elevation={3} sx={{ p: "0px", mt: "10px" }}>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={InterestsFormik.handleSubmit}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
