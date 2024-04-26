import {
  Box,
  Button
} from "@mui/material";
import { useEffect } from "react";
import { purposeSections } from "../../../config/FormData/PurposeData";
import FormComponent from "./components/FormComponent";
import { setPurposeFormData } from "../../../store/actions";
import { enqueueSnackbar } from "notistack";
import { connect } from "react-redux";

const Purpose = (props) => {
  const {
    activeStep,
    handleBack,
    handleNext,
    steps,
    formResponse,
    setPurposeFormData,
  } = {
    ...props,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    for (let i = 0; i < purposeSections.length; i++) {
      let section = purposeSections[i];
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
        section={purposeSections}
        formResponse={formResponse}
        handleChange={setPurposeFormData}
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
    formResponse: state.form.purposeForm,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    setPurposeFormData: (section, question, e) => {
      dispatch(setPurposeFormData(section, question, e.target.value));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Purpose);
