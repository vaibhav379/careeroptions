import { Box, Paper, Step, StepLabel, Stepper, Toolbar } from "@mui/material";
import { useState } from "react";
import Interests from "./Forms/Interests";
import Skills from "./Forms/Skills";
import Purpose from "./Forms/Purpose";
import SocioEconomic from "./Forms/SocioEconomic";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const steps = ["Interests", "Skills", "Purpose", "Socio-Economic"];
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();


  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      console.log("all done");
      navigate("/results");
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const formContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Interests
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            steps={steps}
          />
        );
      case 1:
        return (
          <Skills
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            steps={steps}
          />
        );
      case 2:
        return (
          <Purpose
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            steps={steps}
          />
        );
      case 3:
        return (
          <SocioEconomic
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            steps={steps}
          />
        );
      default:
        return <div>404: Not Found</div>;
    }
  };

  return (
    <Box>
      <Toolbar />
      {/* <Typography variant="h5">Please let us know more about you</Typography> */}
      <Box sx={{mt : "50px", pr : "100px", pl:"100px", pb: "20px"}}>
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
      </Box>
    </Box>
  );
};

export default Dashboard;
