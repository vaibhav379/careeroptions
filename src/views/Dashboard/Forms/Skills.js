import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import { skillsSection } from "../../../config/FormData/SkillsData";
import FormComponent from "./components/FormComponent";
import { connect } from "react-redux";
import { setSkillsFormData } from "../../../store/actions";
import { enqueueSnackbar } from "notistack";

const Skills = (props) => {
  const {
    activeStep,
    handleBack,
    handleNext,
    steps,
    formResponse,
    setSkillsFormData,
  } = {
    ...props,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    for (let i = 0; i < skillsSection.length; i++) {
      let section = skillsSection[i];
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
        section={skillsSection}
        formResponse={formResponse}
        handleChange={setSkillsFormData}
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
    formResponse: state.form.skillsForm,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    setSkillsFormData: (section, question, e) => {
      dispatch(setSkillsFormData(section, question, e.target.value));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Skills);
