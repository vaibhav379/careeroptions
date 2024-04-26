import { Box, Button } from "@mui/material";
import { interestsSection } from "../../../config/FormData/InterestsData";
import { useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import FormComponent from "./components/FormComponent";
import { setInterestsFormData } from "../../../store/actions";
import { connect } from "react-redux";

const Interests = (props) => {
  const {
    activeStep,
    handleBack,
    handleNext,
    steps,
    formResponse,
    setInterestsFormData,
  } = {
    ...props,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    for (let i = 0; i < interestsSection.length; i++) {
      let section = interestsSection[i];
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
        section={interestsSection}
        formResponse={formResponse}
        handleChange={setInterestsFormData}
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
    formResponse: state.form.interestsForm,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    setInterestsFormData: (section, question, e) => {
      dispatch(setInterestsFormData(section, question, e.target.value));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Interests);
