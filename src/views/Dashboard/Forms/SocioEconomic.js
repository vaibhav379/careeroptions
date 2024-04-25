import {
    Box,
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import { getResponseModelFromSectionModel } from "../../../util/utils";
import { socioEconomicSections } from "../../../config/FormData/SocioEconomicData";
  
  const SocioEconomic = (props) => {
    const { activeStep, handleBack, handleNext, steps } = {
      ...props,
    };
  
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[]);
  
    const [formResponse, setFormResponse] = useState(getResponseModelFromSectionModel(socioEconomicSections));
  
    const handleChange = (section, question, e) => {
      setFormResponse((res) => {
        return {
          ...res,
          [section]: {
            ...res[section],
            [question]: e.target.value,
          },
        };
      });
    };
  
    //   const getFieldname = (section,question)=>{
    //     return `section${section.sectionId}.q${question.questionId}`;
    //   }
  
    return (
      <Box>
        {socioEconomicSections.map((section, index) => {
          return (
            <Box sx={{ pt: "50px", pl: "50px" }} key={index}>
              <Typography variant="h5">
                {index + 1}. {section.description}
              </Typography>
              {section.questions.map((questionItem, qindex) => {
                return (
                  <Box key={qindex} sx={{ pt: "20px" }}>
                    {questionItem.type === 1 ? (
                      <Box sx={{ pt: "10px" }}>
                        <FormControl sx={{ width: "100%" }}>
                          <Grid container spacing={0}>
                            <Grid item xs={5}>
                              <Typography sx={{ pl: "15px" }} variant="body1">
                                {qindex + 1}. {questionItem.question}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                row
                                value={
                                  formResponse[`section${section.sectionId}`][
                                    `q${questionItem.questionId}`
                                  ]
                                }
                                onChange={(e) => {
                                  handleChange(
                                    `section${section.sectionId}`,
                                    `q${questionItem.questionId}`,
                                    e
                                  );
                                }}
                              >
                                <FormControlLabel
                                  value="1"
                                  control={<Radio size="small" />}
                                  label="Strongly Disagree"
                                  labelPlacement="top"
                                />
                                <FormControlLabel
                                  value="2"
                                  control={<Radio size="small" />}
                                  label="Disagree"
                                  labelPlacement="top"
                                />
                                <FormControlLabel
                                  value="3"
                                  control={<Radio size="small" />}
                                  label="Neither Agree Nor Disagree"
                                  labelPlacement="top"
                                />
                                <FormControlLabel
                                  value="4"
                                  control={<Radio size="small" />}
                                  label="Agree"
                                  labelPlacement="top"
                                />
                                <FormControlLabel
                                  value="5"
                                  control={<Radio size="small" />}
                                  label="Strongly Agree"
                                  labelPlacement="top"
                                />
                              </RadioGroup>
                            </Grid>
                          </Grid>
                        </FormControl>
                      </Box>
                    ) : null}
                  </Box>
                );
              })}
              {index === socioEconomicSections.length - 1 ? null : <Divider />}
            </Box>
          );
        })}
  
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
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Box>
    );
  };
  
  export default SocioEconomic;
  