import { Box, Card, Stack, Toolbar, Typography } from "@mui/material";
import { connect } from "react-redux";
import { interestsSection } from "../../config/FormData/InterestsData";
import { skillsSection } from "../../config/FormData/SkillsData";
import { purposeSections } from "../../config/FormData/PurposeData";
import { socioEconomicSections } from "../../config/FormData/SocioEconomicData";
import { getFormattedAnswers } from "../../util/utils";

const ResultsDashboard = (props) => {
  const { interestsForm, skillsForm, purposeForm, socioEconomicForm } = {
    ...props,
  };

  const getPropmt = () => {
    let prompt = `Predict 5 possible career options or pathways for {name} based on the following factors. Try to use the factors to figure out which career options in India would be a good fit for {name}


    Interests :
    ${getFormattedAnswers(interestsForm,interestsSection)}
    
    Skills :
    ${getFormattedAnswers(skillsForm,skillsSection)}
    
    Purpose 
    ${getFormattedAnswers(purposeForm,purposeSections)}
    
    Socio-economic conditions 
    ${getFormattedAnswers(socioEconomicForm,socioEconomicSections)}

    `;

    return prompt;
  };

  return (
    <Box>
      <Toolbar />
      <Stack alignItems="center" sx={{ width: "100%" }} spacing={5}>
        <Typography variant="h4">Here are some options for you</Typography>

        {getPropmt()}
        {/* <Card  sx={{minWidth:"600px", p:"20px"}}>
            <Typography variant="h4">Career Option name</Typography>
        </Card> */}
      </Stack>
    </Box>
  );
};

const mapStatetoProps = (state) => {
  return {
    interestsForm: state.form.interestsForm,
    skillsForm: state.form.skillsForm,
    purposeForm: state.form.purposeForm,
    socioEconomicForm: state.form.socioEconomicForm,
  };
};
export default connect(mapStatetoProps, null)(ResultsDashboard);
