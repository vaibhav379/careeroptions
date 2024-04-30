import {
  Box,
  CircularProgress,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { connect } from "react-redux";
import { interestsSection } from "../../config/FormData/InterestsData";
import { skillsSection } from "../../config/FormData/SkillsData";
import { purposeSections } from "../../config/FormData/PurposeData";
import { socioEconomicSections } from "../../config/FormData/SocioEconomicData";
import { getFormattedAnswers } from "../../util/utils";
import { useEffect, useState } from "react";
import * as service from "../../service/api.service";
import OptionList from "./OptionList/OptionList";
import { enqueueSnackbar } from "notistack";
import { Link } from "react-router-dom";

const ResultsDashboard = (props) => {
  const { interestsForm, skillsForm, purposeForm, socioEconomicForm, userName } = {
    ...props,
  };
  const [isLoading, setIsLoading] = useState(true);
  const [careerData, setCareerData] = useState();

  useEffect(() => {
    let url = "/career/getPromptResponse";
    let payload = {
      prompt: getPropmt(),
    };

    service
      .Post(url, payload)
      .then((res) => {
        if (res && res.data && res.data.isSuccess) {
          let json = res.data.results;
          let extract = json.substring(
            json.indexOf("{"),
            json.lastIndexOf("}") + 1
          );
          setCareerData(JSON.parse(extract));
          setIsLoading(false);
        }
      })
      .catch((err) => {
        enqueueSnackbar("Some Error Occurred", { variant: "error" });
        setIsLoading(false);
      });

    //     let extract = json.substring(json.indexOf('{'),json.lastIndexOf('}')+1);
    //     setCareerData(JSON.parse(extract));

    //console.log("use effect called : "+url)
  }, []);

  const getPropmt = () => {
    let prompt = `Predict 5 possible career options or pathways for ${userName} based on the following factors. Try to use the factors to figure out which career options in India would be a good fit for ${userName}


    Interests :
    ${getFormattedAnswers(interestsForm, interestsSection)}
    
    Skills :
    ${getFormattedAnswers(skillsForm, skillsSection)}
    
    Purpose 
    ${getFormattedAnswers(purposeForm, purposeSections)}
    
    Socio-economic conditions 
    ${getFormattedAnswers(socioEconomicForm, socioEconomicSections)}

    format the answer in the following JSON Format :
    {
    "careeroptions" : 
      [
        {
          "name" : "name of the career option",
          "relevance" : "relevance score between 1 to 100",
          "description" : "description of career option",
          "why" : "explain why this option fits well",
          "talents" : ["strings array of the talents required in this career option"],
          "skills" : ["strings array of the skills required in this career option"],
        }
      ]
    }
    The JSON : 
    `;

    return prompt;
  };

  return (
    <Box>
      <Toolbar />
      <Link to="/dashboard" >Back</Link>
      {isLoading ? (
        <Box sx={{ width: "100%" ,textAlign:"center"}}>
          <CircularProgress />
          <Typography>Loading...</Typography>
        </Box>
      ) : (
        <Stack alignItems="center" sx={{ width: "100%" }} spacing={5}>
          <Typography variant="h4">Here are some options for you, {userName}</Typography>

          {careerData && careerData.careeroptions && (
            <OptionList careerOption={careerData.careeroptions} />
          )}
        </Stack>
      )}
    </Box>
  );
};

const mapStatetoProps = (state) => {
  return {
    interestsForm: state.form.interestsForm,
    skillsForm: state.form.skillsForm,
    purposeForm: state.form.purposeForm,
    socioEconomicForm: state.form.socioEconomicForm,
    userName : state.form.name
  };
};
export default connect(mapStatetoProps, null)(ResultsDashboard);
