import {
  Box,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { socioEconomicSections } from "../../../config/FormData/SocioEconomicData";
import FormComponent from "./components/FormComponent";
import { connect } from "react-redux";
import { setSocioFormData } from "../../../store/actions";
import { enqueueSnackbar } from "notistack";

const SocioEconomic = (props) => {
  const { activeStep, handleBack, handleNext, steps,formResponse, setSocioFormData } = {
    ...props,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    for (let i = 0; i < socioEconomicSections.length; i++) {
      let section = socioEconomicSections[i];
      for (let j = 0; j < section.questions.length; j++) {
        let question = section.questions[j];
        if (
          !formResponse[`section${section.sectionId}`][
            `q${question.questionId}`
          ]
        ) {
          enqueueSnackbar(
            `Error in Section ${section.sectionId} question ${j + 1}`,
            {
              variant: "error",
            }
          );
          return false;
        }
      }
    }

    return true;
  };

  const onSubmit = () => {
    if (validateForm()) {
      handleNext();
    } else {
    }
  };

  return (
    <Box>
      <FormComponent
        section={socioEconomicSections}
        formResponse={formResponse}
        handleChange={setSocioFormData}
      />

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
        <Button onClick={onSubmit}>
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

const mapStatetoProps = (state) => {
    return {
      formResponse: state.form.socioEconomicForm,
    };
  };
  
  const mapDispatchtoProps = (dispatch) => {
    return {
        setSocioFormData: (section, question, e) => {
        dispatch(setSocioFormData(section, question, e.target.value));
      },
    };
  };
  
  export default connect(mapStatetoProps, mapDispatchtoProps)(SocioEconomic);
  
