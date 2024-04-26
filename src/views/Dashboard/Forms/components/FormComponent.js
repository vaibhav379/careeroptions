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

const FormComponent = (props)=>{
    const { section, formResponse, handleChange} = {...props};

    return (
        <>
        {section.map((section, index) => {
        return (
          <Box sx={{ pt: "50px", pl: "50px" }} key={index}>
            <Typography variant="h5">
              {section.sectionId}. {section.description}
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
                          <Grid item xs={7}>
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
            {index === section.length - 1 ? null : <Divider />}
          </Box>
        );
      })}
        </>
    )
}

export default FormComponent;
