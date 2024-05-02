import {
  Box,
  Button,
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
import { Link, useNavigate } from "react-router-dom";
import AppBarHOC from "../../util/AppBarHOC";

const ResultsDashboard = (props) => {
  const {
    interestsForm,
    skillsForm,
    purposeForm,
    socioEconomicForm,
    userDetails,
  } = {
    ...props,
  };
  const [isLoading, setIsLoading] = useState(true);
  const [careerData, setCareerData] = useState();
  const navigate  = useNavigate();

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

  const getFormattedEducation = ()=>{
    if(!userDetails.education){
      return "";
    }
    else if(userDetails.education==="12th"){
      return "He is currently in 12th standard";
    }
    else if(userDetails.education==="10th"){
      return "He is currently in 10th standard";
    }
    else if(userDetails.education==="undergrad"){
      return `He is currently undergrad and doing ${userDetails.stream}`;
    }
  }
  const getPropmt = () => {
    let prompt = `Predict 5 possible career options or pathways for ${userDetails.name} based on the following factors. Try to use the factors to figure out which career options in India would be a good fit for ${userDetails.name}.
    ${userDetails.name} belongs to ${userDetails.city} in India. ${getFormattedEducation()}


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
      <Button onClick={()=>{navigate("/dashboard")}}>Back</Button>
      {isLoading ? (
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <CircularProgress />
          <Typography>Loading...</Typography>
        </Box>
      ) : (
        <Stack alignItems="center" sx={{ width: "100%" }} spacing={5}>
          <Typography variant="h4">
            Here are some options for you, {userDetails.name}
          </Typography>

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
    userDetails: state.form.userDetails,

  };
};
export default connect(mapStatetoProps, null)(AppBarHOC(ResultsDashboard));
